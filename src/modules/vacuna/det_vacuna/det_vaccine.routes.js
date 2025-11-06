import { Router } from "express";
import ctrl from "./det_vaccine.controller.js";
import { validate } from "../../../middlewares/validate.js";
import { registrarDetVaccineSchema, actualizarDetVaccineSchema } from "./det_vaccine.schemas.js";

const r = Router();

r.post("/", validate(registrarDetVaccineSchema), ctrl.registrar);
r.get("/", ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);
r.get("/historial/:historial_id", ctrl.listarPorHistorial);
r.put("/:id", validate(actualizarDetVaccineSchema), ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;
