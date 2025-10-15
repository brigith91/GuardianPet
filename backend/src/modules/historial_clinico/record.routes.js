import { Router } from "express";
import ctrl from "./record.controller.js";
import { auth, allow } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import { crearRecordSchema, actualizarRecordSchema } from "./record.schemas.js";

const r = Router();

r.use(auth);
r.post("/", validate(crearRecordSchema), ctrl.crear);
r.get("/veterinario/:veterinario_id", ctrl.listarPorVeterinario);
r.get("/mascota/:mascota_id", ctrl.listarPorMascota);
r.get("/", allow("admin"), ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);
r.put("/:id", validate(actualizarRecordSchema), ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;