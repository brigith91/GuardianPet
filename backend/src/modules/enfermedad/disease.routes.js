import { Router } from "express";
import ctrl from "./disease.controller.js";
import { validate } from "../../middlewares/validate.js";
import { registrarEnfermedadSchema, actualizarEnfermedadSchema } from "./disease.schemas.js";

const r = Router();

r.post("/", validate(registrarEnfermedadSchema), ctrl.registrar);
r.get("/", ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);
r.put("/:id", validate(actualizarEnfermedadSchema), ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;
