import { Router } from "express";
import ctrl from "./cita.controller.js";

const r = Router();

r.post("/", ctrl.registrar);
r.get("/", ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);
r.get("/usuario/:usuario_id", ctrl.listarPorUsuario);
r.get("/veterinario/:veterinario_id", ctrl.listarPorVeterinario);
r.put("/:id", ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;
