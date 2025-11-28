import { Router } from "express";
import ctrl from "./veterinarian.controller.js";
import { validate } from "../../middlewares/validate.js";
import { registerVeterinarianSchema, loginVeterinarianSchema, updateVeterinarianSchema } from "./veterinarian.schemas.js";
import { auth, allow } from "../../middlewares/auth.js";

const r = Router();

r.use(auth);

r.get("/", ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);

r.post("/", allow("admin"), validate(registerVeterinarianSchema), ctrl.registrar);
r.post("/login", validate(loginVeterinarianSchema), ctrl.login);
r.put("/:id", allow("admin"), validate(updateVeterinarianSchema), ctrl.actualizar);
r.delete("/:id", allow("admin"), ctrl.eliminar);

export default r;