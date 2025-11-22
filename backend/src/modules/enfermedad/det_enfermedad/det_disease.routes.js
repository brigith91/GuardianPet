import { Router } from "express";
import ctrl from "./det_disease.controller.js";
import { validate } from "../../../middlewares/validate.js"; // ruta corregida
import { crearDetDiseaseSchema, actualizarDetDiseaseSchema } from "./det_disease.schemas.js";
import { auth, allow } from "../../../middlewares/auth.js";

const r = Router();

r.use(auth);
r.post("/", validate(crearDetDiseaseSchema), ctrl.crear);
r.get("/", ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);
r.put("/:id", validate(actualizarDetDiseaseSchema), ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;

