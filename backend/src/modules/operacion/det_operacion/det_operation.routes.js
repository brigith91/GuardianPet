import { Router } from "express";
import ctrl from "./det_operation.controller.js";
import { validate } from "../../../middlewares/validate.js";
import { registrarDetOperacionSchema, actualizarDetOperacionSchema } from "./det_operation.schemas.js";
import { auth, allow } from "../../../middlewares/auth.js";

const r = Router();

r.use(auth);
r.post("/", validate(registrarDetOperacionSchema), ctrl.registrar);
r.get("/", ctrl.listar);
r.get("/historial/:historial_id", ctrl.listarPorHistorial);
r.get("/:id", ctrl.obtenerPorId);
r.put("/:id", validate(actualizarDetOperacionSchema), ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;
