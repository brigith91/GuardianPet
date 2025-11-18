import 'dotenv/config';
import app from './src/app.js';
import { bootReminderJob } from './src/jobs/reminders.js';
import cors from 'cors';
const port = process.env.PORT || 4000;
app.use(cors({ origin: 'http://localhost:4200', credentials: true }));
app.listen(port, () => {
  console.log(`[guardianpet] API en http://localhost:${port}`);
  bootReminderJob();
});