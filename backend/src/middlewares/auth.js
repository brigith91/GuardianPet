import jwt from "jsonwebtoken";
export const auth = (req, res, next) => {
  const h = req.headers.authorization || "";
  const token = h.startsWith("Bearer ") ? h.slice(7) : null;
  if (!token) return res.status(401).json({ error: "Token requerido" });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.sub;
    req.userRole = payload.rol;
    next();
  } catch {
    res.status(401).json({ error: "Token inválido" });
  }
};
export const allow =
  (...roles) =>
  (req, res, next) => {
    if (!roles.length || roles.includes(req.userRole)) return next();
    return res.status(403).json({ error: "Prohibido" });
  };