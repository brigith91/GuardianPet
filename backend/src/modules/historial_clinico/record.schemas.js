import { z } from "zod";

export const crearRecordSchema = z.object({
  body: z.object({
    fecha: z.string().datetime().or(z.date()),
    descripcion: z.string().min(10),
    tipo: z.string().min(2),
    veterinario_id_fk: z.number().int().positive(),
    mascota_id_fk: z.number().int().positive(),
  }),
});

export const actualizarRecordSchema = z.object({
  body: z.object({
    fecha: z.string().datetime().or(z.date()).optional(),
    descripcion: z.string().min(10).optional(),
    tipo: z.string().min(2).optional(),
    veterinario_id_fk: z.number().int().positive().optional(),
    mascota_id_fk: z.number().int().positive().optional(),
  }),
});