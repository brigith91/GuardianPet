import { Router } from "express";
import ctrl from "./det_operation.controller.js";
import { validate } from "../../../middlewares/validate.js"; 
import { crearDetOperacionSchema, actualizarDetOperacionSchema } from "./det_operation.schemas.js";

const r = Router();

r.post("/", validate(crearDetOperacionSchema), ctrl.crear);
r.get("/", ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);
r.get("/historial/:historial_clinico_id", ctrl.listarPorHistorial);
r.get("/operacion/:operacion_id", ctrl.listarPorOperacion);
r.put("/:id", validate(actualizarDetOperacionSchema), ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;