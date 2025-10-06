import { Router } from "express";
import ctrl from "./user.controller.js";
import { auth, allow } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import { registerSchema, loginSchema } from "./user.schemas.js";

const r = Router();
r.post("/registro", validate(registerSchema), ctrl.registrar);
r.post("/login", validate(loginSchema), ctrl.login);

r.use(auth);
r.get("/me", ctrl.perfil);
r.get("/", allow("admin"), ctrl.listar);
r.put("/:id", allow("admin"), ctrl.actualizar);
r.delete("/:id", allow("admin"), ctrl.eliminar);
export default r;