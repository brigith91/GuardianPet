import { Router } from "express";
import ctrl from "./user.controller.js";
import { auth, allow } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import { registerUserSchema, loginUserSchema, updateUserSchema } from "./user.schemas.js";

const r = Router();

r.post("/registro", validate(registerUserSchema), ctrl.registrar);
r.post("/login", validate(loginUserSchema), ctrl.login);

//valida el token cuando consume el api
r.use(auth);

//obtiene el perfil logueado
r.get("/me", ctrl.perfil);

//administración de usuarios
r.get("/", allow("admin"), ctrl.listar);
r.get("/:id", allow("admin"), ctrl.obtenerPorId);
r.put("/:id", allow("admin"), validate(updateUserSchema), ctrl.actualizar);
r.delete("/:id", allow("admin"), ctrl.eliminar);

export default r;
