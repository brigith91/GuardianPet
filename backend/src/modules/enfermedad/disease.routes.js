import { Router } from "express";
import ctrl from "./disease.controller.js";
import { auth, allow } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import { registerDiseaseSchema, updateDiseaseSchema } from "./disease.schemas.js";

const r = Router();

r.use(auth);
r.get("/", ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);
r.post("/", validate(registerDiseaseSchema), ctrl.registrar);
r.put("/:id", validate(updateDiseaseSchema), ctrl.actualizar);
r.delete("/:id", allow("admin"), ctrl.eliminar);

export default r;