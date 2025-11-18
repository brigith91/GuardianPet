// src/utils/ics.js

function pad(n){ return n < 10 ? '0'+n : ''+n; }

// Para DTSTAMP en UTC (este sí lleva Z)
function toICSDateUTC(date){
  const d = new Date(date);
  const y = d.getUTCFullYear();
  const M = pad(d.getUTCMonth()+1);
  const D = pad(d.getUTCDate());
  const h = pad(d.getUTCHours());
  const m = pad(d.getUTCMinutes());
  const s = pad(d.getUTCSeconds());
  return `${y}${M}${D}T${h}${m}${s}Z`;
}

// Para DTSTART/DTEND en la TZ indicada (sin Z)
function toICSDateInTZ(date, tz){
  // Extrae componentes como si estuvieras en esa zona
  const fmt = new Intl.DateTimeFormat('en-CA', {
    timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
  });
  const parts = Object.fromEntries(fmt.formatToParts(new Date(date)).map(p => [p.type, p.value]));
  const { year, month, day, hour, minute, second } = parts;
  return `${year}${month}${day}T${hour}${minute}${second}`;
}

function escapeICSText(txt=''){
  return String(txt).replace(/([,;])/g,'\\$1').replace(/\n/g,'\\n');
}

export function buildAppointmentICS({ cita, usuario, mascota, veterinario, durationMinutes = 30 }) {
  const tz = process.env.APP_TZ || 'America/Bogota';       // 👈 usa tu zona
  const domain = process.env.ICS_UID_DOMAIN || 'guardianpet.local';
  const uid = `cita-${cita.id}@${domain}`;

  const start = new Date(cita.fecha);
  const end   = new Date(start.getTime() + durationMinutes * 60000);

  const dtstamp = toICSDateUTC(new Date());                // UTC con Z
  const dtstart = toICSDateInTZ(start, tz);                // local sin Z
  const dtend   = toICSDateInTZ(end, tz);                  // local sin Z

  const summary = `Cita: ${mascota?.nombre || 'Mascota'}`;
  const description = [
    `Estado: ${cita.estado}`,
    `Observación: ${cita.observacion || '—'}`,
    `Paciente: ${mascota?.nombre || 'Mascota'}`
  ].map(escapeICSText).join('\\n');

  const organizerEmail = process.env.SMTP_USER;

  // VTIMEZONE fijo para Bogotá (UTC-5, sin DST)
  const vtimezone = [
    'BEGIN:VTIMEZONE',
    'TZID:America/Bogota',
    'X-LIC-LOCATION:America/Bogota',
    'BEGIN:STANDARD',
    'TZOFFSETFROM:-0500',
    'TZOFFSETTO:-0500',
    'TZNAME:COT',
    'DTSTART:19700101T000000',
    'END:STANDARD',
    'END:VTIMEZONE',
  ].join('\r\n');

  return [
    'BEGIN:VCALENDAR',
    'PRODID:-//GuardianPet//Appointments//ES',
    'VERSION:2.0',
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    vtimezone,                                               // 👈 define la TZ
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,                                    // UTC con Z
    `DTSTART;TZID=${tz}:${dtstart}`,                         // LOCAL con TZID
    `DTEND;TZID=${tz}:${dtend}`,                             // LOCAL con TZID
    `SUMMARY:${escapeICSText(summary)}`,
    `DESCRIPTION:${description}`,
    `ORGANIZER;CN=GuardianPet:mailto:${organizerEmail}`,
    usuario?.email ? `ATTENDEE;CN=${escapeICSText(usuario.nombre)};RSVP=TRUE:mailto:${usuario.email}` : '',
    veterinario?.email ? `ATTENDEE;CN=${escapeICSText(veterinario.nombre)};ROLE=OPT-PARTICIPANT:mailto:${veterinario.email}` : '',
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    'DESCRIPTION:Recordatorio de cita',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].filter(Boolean).join('\r\n');
}
