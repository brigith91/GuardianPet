import { Router } from "express";
import ctrl from "./appointment.controller.js";
import { auth, allow } from "../../middlewares/auth.js";

const r = Router();

//valida el token cuando consume el api
r.use(auth);


r.post("/", ctrl.registrar);
r.get("/", ctrl.listar);

// específicas (ponlas antes de "/:id")
r.get("/usuario/:usuario_id", allow("admin"), ctrl.listarPorUsuario);      // admin
r.get("/mascota/:mascota_id", allow("admin"), ctrl.listarPorMascota);      // opcional
r.get("/veterinario/:veterinario_id", allow("admin"), ctrl.listarPorVeterinario);

r.get("/:id",  ctrl.obtenerPorId);
r.put("/:id", ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;
