import { Router } from "express";
import ctrl from "./vaccine.controller.js";
import { validate } from "../../middlewares/validate.js";
import { registrarVaccineSchema, actualizarVaccineSchema } from "./vaccine.schemas.js";
import { auth, allow } from "../../middlewares/auth.js";

const r = Router();

r.use(auth);

r.post("/", allow("admin"), validate(registrarVaccineSchema), ctrl.registrar);
r.get("/", ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);
r.put("/:id",allow("admin"), validate(actualizarVaccineSchema), ctrl.actualizar);
r.delete("/:id", allow("admin"), ctrl.eliminar);

export default r;
