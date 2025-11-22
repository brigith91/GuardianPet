import { Router } from "express";
import ctrl from "./operation.controller.js";
import { validate } from "../../middlewares/validate.js";
import { registrarOperationSchema, actualizarOperationSchema } from "./operation.schemas.js";
import { auth, allow } from "../../middlewares/auth.js";

const r = Router();

r.use(auth);
r.post("/", allow("admin"), validate(registrarOperationSchema), ctrl.registrar);
r.get("/", ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);
r.put("/:id", allow("admin"), validate(actualizarOperationSchema), ctrl.actualizar);
r.delete("/:id", allow("admin"), ctrl.eliminar);

export default r;
