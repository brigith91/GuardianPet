import { Router } from "express";
import ctrl from "./treatment.controller.js";
import { auth, allow } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import { registrarTreatmentSchema, actualizarTreatmentSchema } from "./treatment.schemas.js";

const r = Router();

r.use(auth);
r.post("/", validate(registrarTreatmentSchema), ctrl.registrar);
r.get("/historial/:historial_id", ctrl.listarPorHistorial);
r.get("/", allow("admin"), ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);
r.put("/:id", validate(actualizarTreatmentSchema), ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;