import { Router } from "express";
import ctrl from "./treatment.controller.js";
import { auth, allow } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import { registerTreatmentSchema, updateTreatmentSchema } from "./treatment.schemas.js";

const r = Router();

//r.use(auth);
r.post("/", validate(registerTreatmentSchema), ctrl.registrar);
r.get("/historial/:historial_id", ctrl.listarPorHistorial);
r.get("/",ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);
r.put("/:id", validate(updateTreatmentSchema), ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;