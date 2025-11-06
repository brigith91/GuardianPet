import { Router } from "express";
import ctrl from "./det_operation.controller.js";
import { validate } from "../../../middlewares/validate.js";
import { registrarDetOperacionSchema, actualizarDetOperacionSchema } from "./det_operation.schemas.js";

const r = Router();

r.post("/", validate(registrarDetOperacionSchema), ctrl.registrar);
r.get("/", ctrl.listar);
r.get("/historial/:historial_id", ctrl.listarPorHistorial);
r.get("/:id", ctrl.obtenerPorId);
r.put("/:id", validate(actualizarDetOperacionSchema), ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;
