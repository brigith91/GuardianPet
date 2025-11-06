let hits = new Map();
export default function rateLimit(req, res, next) {
  const key = req.ip;
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const max = 300;
  const w = hits.get(key) || [];
  const recent = w.filter((ts) => now - ts < windowMs);
  recent.push(now);
  hits.set(key, recent);
  if (recent.length > max)
    return res.status(429).json({ error: "Demasiadas peticiones" });
  next();
}