import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import routes from './routes.js';


const app = express();


app.use(helmet());
app.use(express.json({ limit: '1mb' }));


// CORS
const allowed = (process.env.CORS_ORIGIN || '').split(',').map(s => s.trim()).filter(Boolean);
app.use(cors({
origin: (origin, cb) => {
if (!origin || allowed.length === 0 || allowed.includes(origin)) return cb(null, true);
return cb(new Error('CORS no permitido'), false);
},
credentials: true,
}));


// Rate limiter simple por IP (toda la API)
const limiter = new RateLimiterMemory({ points: 300, duration: 900 }); // 300 req por 15 min
app.use(async (req, res, next) => {
try { await limiter.consume(req.ip); next(); }
catch { res.status(429).json({ error: 'Demasiadas peticiones' }); }
});


// Salud
app.get('/health', (req, res) => res.json({ ok: true }));


// Rutas
app.use('/api', routes);


// 404
app.use((req, res) => res.status(404).json({ error: 'No encontrado' }));
// 500
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
console.error(err);
res.status(err.status || 500).json({ error: err.message || 'Error interno' });
});


export default app;