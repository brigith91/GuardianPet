import { Router } from 'express';
import userRoutes from '../src/modules/usuario/userRoutes.js';
import clinicaRoutes from '../src/modules/clinica/clinicaRoutes.js';
import enfermedadRoutes from '../src/modules/enfermedad/enfermedadRoutes.js';
import historialRoutes from '../src/modules/historial-clinico/historialRoutes.js';
import mascotaRoutes from '../src/modules/mascota/mascotaRoutes.js';
import operacionRoutes from '../src/modules/operacion/operacionRoutes.js';
import tratamientoRoutes from '../src/modules/tratamiento/tratamientoRoutes.js';
import vacunaRoutes from '../src/modules/vacuna/vacunaRoutes.js';
import veterinarioRoutes from '../src/modules/veterinario/veterinarioRoutes.js';


const router = Router();


router.use('/usuario', userRoutes);
router.use('/clinica', clinicaRoutes);
router.use('/enfermedade', enfermedadRoutes);
router.use('/historial', historialRoutes);
router.use('/mascota', mascotaRoutes);
router.use('/operacion', operacionRoutes);
router.use('/tratamiento', tratamientoRoutes);
router.use('/vacuna', vacunaRoutes);
router.use('/veterinario', veterinarioRoutes);


export default router;