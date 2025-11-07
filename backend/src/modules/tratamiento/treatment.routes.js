import { Router } from "express";
import controller from "./treatment.controller.js";

const router = Router();

router.post("/", controller.crear);
router.get("/", controller.listar);
router.get("/:id", controller.obtenerPorId);
router.put("/:id", controller.actualizar);
router.delete("/:id", controller.eliminar);

export default router;
