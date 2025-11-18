import nodemailer from 'nodemailer';
import fs from 'fs';

const allowSelfSigned = process.env.SMTP_ALLOW_SELF_SIGNED === 'true';
const port = Number(process.env.SMTP_PORT ?? 465);
const secure = String(process.env.SMTP_SECURE ?? 'true') === 'true'; // 465 = SSL, 587 = STARTTLS

export const mailer = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port,
  secure,                  // true: 465 SSL / false: 587 STARTTLS
  requireTLS: !secure,     // si usas 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, // App Password de Gmail
  },
  tls: allowSelfSigned
    ? { rejectUnauthorized: false } // ⚠️ solo DEV
    : { minVersion: 'TLSv1.2' },
});

export async function sendPasswordResetMail({ to, name, token }) {
  const base = process.env.FRONTEND_URL || 'http://localhost:4200';
  // Link que tu frontend debe atender (ruta /auth/reset-password?token=...)
  const url = `${base}/reset-password?token=${encodeURIComponent(token)}`;

  const html = `
    <div style="font-family:system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height:1.5">
      <h2>Recuperar contraseña</h2>
      <p>Hola ${name || ''}, recibimos una solicitud para restablecer tu contraseña.</p>
      <p>Haz clic en el botón (o copia el enlace) para continuar. Este enlace vence en ${process.env.RESET_TOKEN_TTL_MIN || 30} minutos.</p>
      <p><a href="${url}" style="display:inline-block;padding:10px 16px;background:#1f7aec;color:#fff;border-radius:8px;text-decoration:none">Restablecer contraseña</a></p>
      <p style="word-break:break-all">${url}</p>
      <hr/>
      <small>Si no solicitaste este cambio, ignora este correo.</small>
    </div>
  `;

  await mailer.sendMail({
    from: process.env.EMAIL_FROM || process.env.SMTP_USER,
    to,
    subject: 'Restablece tu contraseña',
    html,
  });
}
