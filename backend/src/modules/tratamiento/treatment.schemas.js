import { z } from "zod";

export const registerTreatmentSchema = z.object({
  body: z.object({
    tipo: z.string().min(1),
    fecha: z.string(),      // ISO date string
    fecha_fin: z.string(),  // ISO date string
    descripcion: z.string().min(10),
    enfermedad_id_fk: z.number(),
  }),
});

export const updateTreatmentSchema = z.object({
  body: z.object({
    tipo: z.string().min(1).optional(),
    fecha: z.string().optional(),
    fecha_fin: z.string().optional(),
    descripcion: z.string().min(10).optional(),
    enfermedad_id_fk: z.number().optional(),
  }),
});

