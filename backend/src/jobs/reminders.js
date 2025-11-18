import cron from 'node-cron';
import { sendOneDayReminderBatch } from '../modules/cita/alerts.js';

export function bootReminderJob(){
  const expr = process.env.REMINDER_CRON || '0 * * * *'; // cada hora
  cron.schedule(expr, async () => {
    try { await sendOneDayReminderBatch(); }
    catch (e) { console.error('Reminder job error', e); }
  });
}
