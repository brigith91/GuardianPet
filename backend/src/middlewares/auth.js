import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export const auth = (req, res, next) => {
  const h = req.headers.authorization || "";
  const token = h.startsWith("Bearer ") ? h.slice(7) : null;
  if (!token) return res.status(401).json({ error: "Token requerido" });
  try {
    const payload = jwt.verify(token, env.jwtSecret);
    req.userId = payload.sub;
    req.userRole = payload.rol;
    next();
  } catch {
    res.status(401).json({ error: "Token inválido" });
  }
};

export const allow = (...roles) => {
  return (req, res, next) => {
    // Verificar si el usuario tiene el rol permitido
    if (roles.length > 0 && roles.includes(req.userRole)) {
      return next();
    }

    // Verificar si el usuario está intentando acceder a su propio perfil
    if (req.params.id === req.userId) {
      return next();
    }

    // Si no cumple ninguna de las condiciones, denegar el acceso
    return res.status(403).json({ error: "Prohibido" });
  };
};