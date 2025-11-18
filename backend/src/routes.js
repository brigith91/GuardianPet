import { Router } from "express";
import userRoutes from "./modules/usuario/user.routes.js";
import clinicaRoutes from "./modules/clinica/clinic.routes.js";
import diseaseRoutes from "./modules/enfermedad/disease.routes.js";
import historialRoutes from "./modules/historial_clinico/record.routes.js";
import petRoutes from "./modules/mascota/pet.routes.js";
import operationRoutes from "./modules/operacion/operation.routes.js";
import treatmentRoutes from "./modules/tratamiento/treatment.routes.js";
import vaccineRoutes from "./modules/vacuna/vaccine.routes.js";
import veterinarianRoutes from "./modules/veterinario/veterinarian.routes.js";
import citaRoutes from "./modules/cita/appointment.routes.js";
import passwordRoutes from './modules/password/password.routes.js';

// Módulos de detalle 
import detOperationRoutes from "./modules/operacion/det_operacion/det_operation.routes.js"; 
import detDiseaseRoutes from "./modules/enfermedad/det_enfermedad/det_disease.routes.js";
import detVaccineRoutes from "./modules/vacuna/det_vacuna/det_vaccine.routes.js"; 
import chatRoutes from './modules/chat/chat.routes.js';

const r = Router();

//  Rutas públicas (SIN autenticación) - deben ir PRIMERO

r.use('/auth', passwordRoutes); 
r.use("/usuarios", userRoutes);

//  Rutas protegidas (CON autenticación interna en cada módulo)

r.use("/clinicas", clinicaRoutes);
r.use("/enfermedades", diseaseRoutes);
r.use("/historial_clinico", historialRoutes);
r.use("/vacunas", vaccineRoutes);
r.use("/veterinarios", veterinarianRoutes);
r.use("/mascotas", petRoutes);
r.use("/operaciones", operationRoutes);
r.use("/tratamientos", treatmentRoutes);
r.use("/citas", citaRoutes);
r.use('/chat', chatRoutes);

// Rutas de detalle
r.use("/det_operaciones", detOperationRoutes);
r.use("/det_enfermedades", detDiseaseRoutes);
r.use("/det_vacunas", detVaccineRoutes);

export default r;