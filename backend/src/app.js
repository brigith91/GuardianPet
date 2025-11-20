import express from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes.js";
import { errorHandler, notFound } from "./middlewares/error.js";
import rateLimit from "./middlewares/rateLimit.js";

const app = express();

app.use(cors({
  origin: (origin, cb) => {
    const allowed = (process.env.CORS_ORIGIN || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (!origin || allowed.length === 0 || allowed.includes(origin))
      return cb(null, true);
    return cb(new Error("CORS no permitido"));
  },
  credentials: true,
}));
// Middlewares en orden correcto
app.use(helmet());

// CRÍTICO: express.json() ANTES del rate limit
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true })); // Agregado para formularios

// Rate limit DESPUÉS de parsear el body
app.use(rateLimit);

// Rutas
app.get("/health", (req, res) => res.json({ ok: true }));
app.use("/api", routes);

// Manejo de errores al final
app.use(notFound);
app.use(errorHandler);


export default app;

