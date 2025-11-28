import { z } from "zod";

export const crearRecordSchema = z.object({
  body: z.object({
    fecha: z.string().datetime().or(z.date()),
    descripcion: z.string().min(10),
    tipo: z.string().min(2),
    url_archivos: z.string().optional(),
    veterinario_id_fk: z.number().int().positive().optional(),
    mascota_id_fk: z.number().int().positive(),
    cita_id_fk: z.number().int().positive().optional(),
  }),
});

export const actualizarRecordSchema = z.object({
  body: z.object({
    fecha: z.string().datetime().or(z.date()),
    descripcion: z.string().min(10),
    tipo: z.string().min(2),
    url_archivos: z.string().optional(),
    veterinario_id_fk: z.number().int().positive().optional(),
    mascota_id_fk: z.number().int().positive(),
    cita_id_fk: z.number().int().positive().optional(),
  }),
});