import crypto from 'crypto';
import prisma from '../../config/prisma.js';
import { hashPassword } from '../../utils/crypto.js';

const TTL_MIN = Number(process.env.RESET_TOKEN_TTL_MIN ?? 30);

function genTokenRaw() {
  return crypto.randomBytes(32).toString('base64url');
}
function hashToken(raw) {
  return crypto.createHash('sha256').update(raw).digest('hex');
}

export default {
  async createResetTokenForEmail(email, meta = {}) {
    const user = await prisma.usuario.findUnique({ where: { email } });
    if (!user) return null; // no reveles existencia

    const raw = genTokenRaw();
    const token_hash = hashToken(raw);
    const expires_at = new Date(Date.now() + TTL_MIN * 60 * 1000);

    await prisma.password_reset_token.create({
      data: {
        usuario_id_fk: user.id,              // <- no userId
        token_hash,                          // <- no tokenHash
        expires_at,                          // <- no expiresAt
        ip: meta.ip ?? null,
        user_agent: meta.ua ?? null,         // <- no userAgent
      },
    });

    return { rawToken: raw, user };
  },

  async verifyResetToken(rawToken) {
    const token_hash = hashToken(rawToken);
    const rec = await prisma.password_reset_token.findUnique({
      where: { token_hash },                 // <- no tokenHash
      include: { usuario: { select: { id: true, email: true, nombre: true } } },
    });
    if (!rec || rec.used_at || rec.expires_at.getTime() < Date.now()) return null;
    return rec;
  },

  async consumeResetTokenAndSetPassword(rawToken, nuevaClave) {
    const token_hash = hashToken(rawToken);

    const rec = await prisma.password_reset_token.findUnique({
      where: { token_hash },
      include: { usuario: true },
    });
    if (!rec || rec.used_at || rec.expires_at.getTime() < Date.now()) {
      throw new Error('Token inválido o vencido');
    }

    const hashed = await hashPassword(nuevaClave);

    await prisma.$transaction([
      prisma.usuario.update({
        where: { id: rec.usuario_id_fk },    // <- no userId
        data: { contrasena: hashed },
      }),
      prisma.password_reset_token.update({
        where: { token_hash },
        data: { used_at: new Date() },
      }),
      prisma.password_reset_token.deleteMany({
        where: {
          usuario_id_fk: rec.usuario_id_fk,
          used_at: null,
          expires_at: { gt: new Date() },
          token_hash: { not: token_hash },
        },
      }),
    ]);

    return { userId: rec.usuario_id_fk };
  },
};
