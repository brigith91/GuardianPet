import { Router } from "express";
import ctrl from "./mascota.controller.js";
import { auth, allow } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import { crearMascotaSchema, actualizarMascotaSchema } from "./mascota.schemas.js";

const r = Router();

r.use(auth);
r.post("/", validate(crearMascotaSchema), ctrl.crear);
r.get("/", ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);
r.put("/:id", validate(actualizarMascotaSchema), ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;