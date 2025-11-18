// src/modules/appointment/alerts.js
import prisma from '../../config/prisma.js';
import { sendAppointmentEmail } from '../../lib/mailer.js';
import { buildAppointmentICS } from '../../utils/ics.js';

function fmtFecha(fecha){
  const tz = process.env.APP_TZ || 'America/Bogota';
  return new Date(fecha).toLocaleString('es-CO', { timeZone: tz, dateStyle: 'full', timeStyle: 'short' });
}

/** Enviar la invitación (.ics) cuando se crea/edita una cita */
export async function sendNewAppointmentInvite(citaId){
  const full = await prisma.cita.findUnique({
    where: { id: Number(citaId) },
    include: {
      mascota: { include: { usuario: true } },
      veterinario: true,
    }
  });
  if (!full) return;

  const usuario = full.mascota.usuario;
  const mascota = full.mascota;
  const vet     = full.veterinario;

  const fechaTxt = fmtFecha(full.fecha);
  const subject = `Cita creada para ${mascota.nombre} • ${fechaTxt}`;
  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif">
      <h2>¡Cita programada!</h2>
      <p>Hola ${usuario.nombre}, tu cita para <b>${mascota.nombre}</b> quedó para <b>${fechaTxt}</b>.</p>
      <p><b>Estado:</b> ${full.estado}</p>
      <p><b>Observación:</b> ${full.observacion || '—'}</p>
      <hr/>
      <p>Adjuntamos la invitación (.ics) para añadirla a tu calendario.</p>
    </div>
  `;

  const ics = buildAppointmentICS({ cita: full, usuario, mascota, veterinario: vet, durationMinutes: 30 });

  await sendAppointmentEmail({ to: usuario.email, subject, html, ics });
}

/** Enviar recordatorios por correo ~24h antes (batch) */
export async function sendOneDayReminderBatch(){
  const aheadMin = Number(process.env.REMINDER_AHEAD_MINUTES ?? 1440); // 24h
  const now = new Date();
  const from = new Date(now.getTime() + (aheadMin - 30) * 60000);
  const to   = new Date(now.getTime() + (aheadMin + 30) * 60000);

  const citas = await prisma.cita.findMany({
    where: { reminder_email_sent: false, fecha: { gte: from, lte: to } },
    include: { mascota: { include: { usuario: true } } }
  });

  for (const c of citas) {
    try {
      const usuario = c.mascota.usuario;
      const mascota = c.mascota;
      const fechaTxt = fmtFecha(c.fecha);
      const subject = `Recordatorio: cita mañana • ${mascota.nombre}`;
      const html = `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif">
          <h2>Recordatorio de cita</h2>
          <p>Hola ${usuario.nombre}, te recordamos la cita de <b>${mascota.nombre}</b> el <b>${fechaTxt}</b>.</p>
        </div>
      `;
      await sendAppointmentEmail({ to: usuario.email, subject, html });
      await prisma.cita.update({ where: { id: c.id }, data: { reminder_email_sent: true } });
    } catch (e) {
      console.error('Reminder error cita', c.id, e);
    }
  }
}
