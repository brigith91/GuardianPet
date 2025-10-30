import { Router } from "express";
import ctrl from "./veterinarian.controller.js";
import { validate } from "../../middlewares/validate.js";
import { registerVeterinarianSchema, loginVeterinarianSchema, updateVeterinarianSchema } from "./veterinarian.schemas.js";

const r = Router();



//r.use(auth);
r.get("/", ctrl.listar);
r.get("/:id", ctrl.perfil)
r.post("/", validate(registerVeterinarianSchema), ctrl.registrar);
r.put("/:id", validate(loginVeterinarianSchema), ctrl.actualizar);
r.put("/:id", validate(updateVeterinarianSchema), ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;