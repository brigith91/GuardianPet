import { Router } from "express";
import ctrl from "./pet.controller.js";
import { auth, allow } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import { registrarPetSchema, actualizarPetSchema } from "./pet.schemas.js";

const r = Router();

// Valida el token cuando consume el API
r.use(auth);

r.post("/", validate(registrarPetSchema), ctrl.registrar);
r.get("/", ctrl.listar);

// Rutas específicas (ponlas antes de "/:id")
r.get("/usuario/:usuario_id", allow("admin"), ctrl.listarPorUsuario); // solo admin

r.get("/:id", ctrl.obtenerPorId);
r.put("/:id", validate(actualizarPetSchema), ctrl.actualizar);
r.delete("/:id", allow("admin"), ctrl.eliminar); // Solo admin puede eliminar

export default r;