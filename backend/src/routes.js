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
import citaRoutes from "./modules/cita/appointment.routes.js";

// Módulos de detalle 

// ✅ Esta línea ya fue corregida
import detOperationRoutes from "./modules/operacion/det_operacion/det_operation.routes.js"; 
import detDiseaseRoutes from "./modules/enfermedad/det_enfermedad/det_disease.routes.js";

// ✅ LÍNEA CORREGIDA: Cambiado 'det_vaccine' a 'det_vacuna' para que coincida con la carpeta
import detVaccineRoutes from "./modules/vacuna/det_vacuna/det_vaccine.routes.js"; 

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
r.use("/citas", citaRoutes);


// Rutas de detalle

r.use("/det-operation", detOperationRoutes);
r.use("/det-disease", detDiseaseRoutes);
r.use("/det-vaccine", detVaccineRoutes);

export default r;