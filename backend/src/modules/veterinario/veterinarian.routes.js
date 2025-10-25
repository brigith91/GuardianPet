import { Router } from "express";
import ctrl from "./veterinarian.controller.js";
import { auth, allow } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import { registerVetenirarianSchema, loginSchema } from "./veterinarian.schemas.js";

const r = Router();

r.get("/", ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);

//r.use(auth);
r.post("/",  validate(registerVetenirarianSchema), ctrl.registrar);
r.put("/:id", validate(updateVetenirarianSchema), ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;