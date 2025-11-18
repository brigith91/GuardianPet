import { Router } from 'express';
import ctrl from './password.controller.js';
import { validate } from '../../middlewares/validate.js';
import { z } from 'zod';

const r = Router();

// Schemas simples (usa tu validate() existente con Zod)
const forgotSchema = z.object({ body: z.object({ email: z.string().email() }) });
const resetSchema  = z.object({ body: z.object({ token: z.string().min(10), contrasena: z.string().min(6) }) });

r.post('/forgot-password', validate(forgotSchema), ctrl.forgot);
r.post('/reset-password',  validate(resetSchema),  ctrl.reset);

export default r;
