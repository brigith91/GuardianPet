import { Router } from "express";
import ctrl from "./disease.controller.js";
import { validate } from "../../middlewares/validate.js";
import { registrarEnfermedadSchema, actualizarEnfermedadSchema } from "./disease.schemas.js";
import { auth, allow } from "../../middlewares/auth.js";

const r = Router();

r.use(auth);
r.post("/", allow("admin"), validate(registrarEnfermedadSchema), ctrl.registrar);
r.get("/", ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);
r.put("/:id", allow("admin"), validate(actualizarEnfermedadSchema), ctrl.actualizar);
r.delete("/:id", allow("admin"), ctrl.eliminar);

export default r;
