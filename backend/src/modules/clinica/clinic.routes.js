import { Router } from "express";
import ctrl from "./clinic.controller.js";
import { auth, allow } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import { registerClinicSchema, updateClinicSchema } from "./clinic.schemas.js";

const r = Router();

r.get("/", ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);

r.use(auth);
r.post("/", allow("admin"), validate(registerClinicSchema), ctrl.registrar);
r.put("/:id", allow("admin"), validate(updateClinicSchema), ctrl.actualizar);
r.delete("/:id", allow("admin"), ctrl.eliminar);

export default r;