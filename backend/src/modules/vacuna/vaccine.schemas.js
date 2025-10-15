import { z } from "zod";

export const registrarVaccineSchema = z.object({
  body: z.object({
    nombre: z.string().min(2),
    fecha: z.string().datetime().or(z.date()),
    descripción: z.string().min(5),
    historial_clinico_id_fk: z.number().int().positive(),
  }),
});

export const actualizarVaccineSchema = z.object({
  body: z.object({
    nombre: z.string().min(2).optional(),
    fecha: z.string().datetime().or(z.date()).optional(),
    descripción: z.string().min(5).optional(),
    historial_clinico_id_fk: z.number().int().positive().optional(),
  }),
});