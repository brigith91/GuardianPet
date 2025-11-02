import { z } from "zod";

export const crearDetOperacionSchema = z.object({
  body: z.object({
    historial_clinico_id_fk: z.number().int().positive(),
    operacion_id_fk: z.number().int().positive(),
    fecha: z.string().datetime().or(z.date()),
    observaciones: z.string().min(5),
  }),
});

export const actualizarDetOperacionSchema = z.object({
  body: z.object({
    historial_clinico_id_fk: z.number().int().positive().optional(),
    operacion_id_fk: z.number().int().positive().optional(),
    fecha: z.string().datetime().or(z.date()).optional(),
    observaciones: z.string().min(5).optional(),
  }),
});

