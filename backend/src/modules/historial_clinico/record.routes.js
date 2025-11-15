import { Router } from "express";
import ctrl from "./record.controller.js";
import { auth, allow } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import { crearRecordSchema, actualizarRecordSchema } from "./record.schemas.js";

const r = Router();

// Valida el token cuando consume el API
r.use(auth);

r.post("/", validate(crearRecordSchema), ctrl.crear);
r.get("/", ctrl.listar);

// Rutas específicas (ponlas antes de "/:id")
r.get("/usuario/:usuario_id", allow("admin"), ctrl.listarPorUsuario);
r.get("/veterinario/:veterinario_id", allow("admin"), ctrl.listarPorVeterinario);
r.get("/mascota/:mascota_id", allow("admin"), ctrl.listarPorMascota);

r.get("/:id", ctrl.obtenerPorId);
r.put("/:id", validate(actualizarRecordSchema), ctrl.actualizar);
r.delete("/:id", allow("admin"), ctrl.eliminar); // Solo admin puede eliminar

export default r;