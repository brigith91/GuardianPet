import { Router } from "express";
import ctrl from "./det_disease.controller.js";
import { validate } from "../../../middlewares/validate.js"; 
import { crearDetDiseaseSchema, actualizarDetDiseaseSchema } from "./det_disease.schemas.js";

const r = Router();

r.post("/", validate(crearDetDiseaseSchema), ctrl.crear);
r.get("/", ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);
r.get("/historial/:historial_clinico_id", ctrl.listarPorHistorial);
r.get("/enfermedad/:enfermedad_id", ctrl.listarPorEnfermedad);
r.put("/:id", validate(actualizarDetDiseaseSchema), ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;