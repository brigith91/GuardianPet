import { Router } from "express";
import userRoutes from "./modules/usuario/user.routes.js";
import clinicaRoutes from "./modules/clinica/clinic.routes.js";
import diseaseRoutes from "./modules/enfermedad/disease.routes.js";
import historialRoutes from "./modules/historial_clinico/record.routes.js";
//import mascotaRoutes from "./modules/mascota/mascota.routes.js";
import petRoutes from "./modules/mascota/pet.routes.js";
import operationRoutes from "./modules/operacion/operation.routes.js";
import treatmentRoutes from "./modules/tratamiento/treatment.routes.js";
import vaccineRoutes from "./modules/vacuna/vaccine.routes.js";
import veterinarianRoutes from "./modules/veterinario/veterinarian.routes.js";


// importa resto de módulos...

const r = Router();
r.use("/usuarios", userRoutes);
r.use("/clinicas", clinicaRoutes);
r.use("/enfermedades", diseaseRoutes);
r.use("/historial_clinico", historialRoutes);
r.use("/vacunas", vaccineRoutes);
r.use("/veterinarios", veterinarianRoutes);
r.use("/mascotas", petRoutes);
r.use("/operaciones", operationRoutes);
r.use("/tratamientos", treatmentRoutes);

export default r;