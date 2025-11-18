import svc from './password.service.js';
import { sendPasswordResetMail } from '../../lib/mailer.js';

export default {
  // POST /auth/forgot-password  { email }
  forgot: async (req, res, next) => {
    try {
      const { email } = req.body || {};
      if (!email) return res.status(400).json({ error: 'Email requerido' });

      // Crea el token (si el usuario existe) y envía el correo
      const meta = { ip: req.ip, ua: req.headers['user-agent'] };
      const result = await svc.createResetTokenForEmail(email, meta);

      if (result?.rawToken) {
        await sendPasswordResetMail({
          to: email,
          name: result.user?.nombre,
          token: result.rawToken,
        });
      }

      // Siempre 200 para no revelar si el email existe
      res.json({ ok: true, message: 'Si el correo existe, recibirás instrucciones en unos minutos.' });
    } catch (e) { next(e); }
  },

  // POST /auth/reset-password  { token, contrasena }
  reset: async (req, res, next) => {
    try {
      const { token, contrasena } = req.body || {};
      if (!token || !contrasena) return res.status(400).json({ error: 'Token y nueva contraseña son requeridos' });

      await svc.consumeResetTokenAndSetPassword(token, contrasena);
      res.json({ ok: true, message: 'Contraseña actualizada correctamente' });
    } catch (e) { next(e); }
  },
};
