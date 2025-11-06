import { Router } from "express";
import ctrl from "./pet.controller.js";
import { auth, allow } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import { registrarPetSchema, actualizarPetSchema } from "./pet.schemas.js";

const r = Router();

//r.use(auth);
r.post("/", validate(registrarPetSchema), ctrl.registrar);
r.get("/mis-mascotas", ctrl.listarPorUsuario);
r.get("/", ctrl.listar);
r.get("/:id", ctrl.obtenerPorId);
r.put("/:id", validate(actualizarPetSchema), ctrl.actualizar);
r.delete("/:id", ctrl.eliminar);

export default r;