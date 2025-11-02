import { Router } from "express";
import ctrl from "./det_vaccine.controller.js";
import { validate } from "../../../middlewares/validate.js"; 
import { crearDetVaccineSchema, actualizarDetVaccineSchema } from "./det_vaccine.schemas.js";

const r = Router();

r.post("/", validate(crearDetVaccineSchema), ctrl.crear);
r.get("/", ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);
r.get("/historial/:historial_clinico_id", ctrl.listarPorHistorial);
r.get("/vacuna/:vacuna_id", ctrl.listarPorVacuna);
r.put("/:id", validate(actualizarDetVaccineSchema), ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;