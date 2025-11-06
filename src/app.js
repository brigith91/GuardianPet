import express from "express";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes.js";
import { errorHandler, notFound } from "./middlewares/error.js";
import rateLimit from "./middlewares/rateLimit.js";

const app = express();
app.use(helmet());
app.use(express.json({ limit: "1mb" }));
app.use(
  cors({
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
  })
);
app.use(rateLimit);

app.get("/health", (req, res) => res.json({ ok: true }));
app.use("/api", routes);
app.use(notFound);
app.use(errorHandler);
export default app;