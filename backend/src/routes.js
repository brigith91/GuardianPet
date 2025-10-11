import { Router } from "express";
import userRoutes from "./modules/usuario/user.routes.js";
//import mascotaRoutes from "./modules/mascota/mascota.routes.js";
// importa resto de módulos...

const r = Router();
r.use("/usuarios", userRoutes);
//r.use("/mascotas", mascotaRoutes);
export default r;