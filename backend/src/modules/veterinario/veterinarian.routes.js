import { Router } from "express";
import ctrl from "./veterinarian.controller.js";
import { auth, allow } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import { registerVeterinarianSchema, loginVeterinarianSchema } from "./veterinarian.schemas.js";

const r = Router();

r.get("/", ctrl.listar);

//r.use(auth);
r.post("/",  validate(registerVeterinarianSchema), ctrl.registrar);
r.put("/:id", validate(loginVeterinarianSchema), ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;