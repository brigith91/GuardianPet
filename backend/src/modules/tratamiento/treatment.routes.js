import { Router } from "express";
import controller from "./treatment.controller.js";
import { auth, allow } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import { registerTreatmentSchema, updateTreatmentSchema } from "./treatment.schemas.js";

const router = Router();

router.use(auth);
router.post("/", validate(registerTreatmentSchema), controller.crear);
router.get("/", controller.listar);
router.get("/:id", controller.obtenerPorId);
router.put("/:id", validate(updateTreatmentSchema), controller.actualizar);
router.delete("/:id", allow("admin"), controller.eliminar);

export default router;