import { Router } from "express";
import ctrl from "./operation.controller.js";
import { auth, allow } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import { registrarOperationSchema, actualizarOperationSchema } from "./operation.schemas.js";

const r = Router();

//r.use(auth);
r.post("/", validate(registrarOperationSchema), ctrl.registrar);
r.get("/historial/:historial_id", ctrl.listarPorHistorial);
r.get("/", ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);
r.put("/:id", validate(actualizarOperationSchema), ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;