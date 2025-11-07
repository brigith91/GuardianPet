import { Router } from "express";
import ctrl from "./vaccine.controller.js";
import { validate } from "../../middlewares/validate.js";
import { registrarVaccineSchema, actualizarVaccineSchema } from "./vaccine.schemas.js";

const r = Router();

r.post("/", validate(registrarVaccineSchema), ctrl.registrar);
r.get("/", ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);
r.put("/:id", validate(actualizarVaccineSchema), ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;
