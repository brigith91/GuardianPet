import { Router } from "express";
import ctrl from "./user.controller.js";
import { auth, allow } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import { registerUserSchema, loginUserSchema, updateUserSchema } from "./user.schemas.js";

const r = Router();

r.post("/registro", validate(registerUserSchema), ctrl.registrar);
r.post("/login", validate(loginUserSchema), ctrl.login);

// r.use(auth); // Descomenta si quieres proteger las rutas con auth
r.get("/me", ctrl.perfil);
r.get("/", ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);
r.put("/:id", validate(updateUserSchema), ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;
