import nodemailer from 'nodemailer';

const allowSelfSigned = process.env.SMTP_ALLOW_SELF_SIGNED === 'true';

export const mailer = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT ?? 465),
  secure: String(process.env.SMTP_SECURE ?? 'true') === 'true', // 465 SSL / 587 STARTTLS (secure:false)
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }, // Gmail App Password
  tls: allowSelfSigned ? { rejectUnauthorized: false } : { minVersion: 'TLSv1.2' },
});

/** Base: envía HTML y, opcionalmente, una invitación .ics */
export async function sendMail({ to, subject, html, ics, cc, bcc }) {
  const msg = {
    from: process.env.EMAIL_FROM || process.env.SMTP_USER,
    to, cc, bcc,
    subject,
    html,
  };

  if (ics) {
    // Hace que Gmail/Outlook/Apple Calendar detecten el evento con “Añadir a calendario”
    msg.alternatives = [{
      contentType: 'text/calendar; charset="utf-8"; method=REQUEST',
      content: ics,
    }];
    msg.icalEvent = { method: 'REQUEST', content: ics }; // compatible con clientes
  }

  await mailer.sendMail(msg);
}

/** ========= RESET DE CONTRASEÑA ========= **/

/** Render del correo “Olvidé mi contraseña” */
export function renderPasswordResetMail({ name, token }) {
  const base = process.env.FRONTEND_URL || 'http://localhost:4200';
  const path = process.env.FRONTEND_RESET_PATH || '/reset-password'; // puedes usar /auth/reset-password si quieres
  const url  = `${base}${path}?token=${encodeURIComponent(token)}`;
  const ttl  = Number(process.env.RESET_TOKEN_TTL_MIN ?? 30);

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;line-height:1.5">
      <h2>Recuperar contraseña</h2>
      <p>Hola ${name || ''}, recibimos una solicitud para restablecer tu contraseña.</p>
      <p>Haz clic en el botón (o copia el enlace) para continuar. Este enlace vence en ${ttl} minutos.</p>
      <p>
        <a href="${url}" style="display:inline-block;padding:10px 16px;background:#1f7aec;color:#fff;border-radius:8px;text-decoration:none">
          Restablecer contraseña
        </a>
      </p>
      <p style="word-break:break-all">${url}</p>
      <hr/>
      <small>Si no solicitaste este cambio, ignora este correo.</small>
    </div>
  `;

  return { subject: 'Restablece tu contraseña', html };
}

/** Enviar el correo de reset (sin .ics) */
export async function sendPasswordResetMail({ to, name, token }) {
  const { subject, html } = renderPasswordResetMail({ name, token });
  await sendMail({ to, subject, html });
}

/** ========= CITAS / INVITACIÓN .ICS ========= **/
/** Mantén esta función para las citas (usa ics si le pasas `ics`) */
export async function sendAppointmentEmail({ to, subject, html, ics, cc, bcc }) {
  await sendMail({ to, subject, html, ics, cc, bcc });
}
