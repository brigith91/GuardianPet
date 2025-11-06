import logger from "../config/logger.js";
export const notFound = (req, res) =>
  res.status(404).json({ error: "No encontrado" });
export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Error interno";
  if (status >= 500) logger.error({ err }, "Unhandled Error");
  res.status(status).json({ error: message });
};