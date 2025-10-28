import { z } from "zod";

export const registerTreatmentSchema = z.object({
  body: z.object({
    tipo: z.string().min(2),
    fecha: z.string().datetime(),
    fecha_fin: z.string().datetime().optional(),
    descripcion: z.string().optional(),
    enfermeda_id_fk: z.number().int().positive(),
  }),       
});

export const updateTreatmentSchema = z.object({
  body: z.object({
    tipo: z.string().min(2).optional(),
    fecha_inicio: z.string().datetime().optional(),
    fecha_fin: z.string().datetime().optional(),
    descripcion: z.string().optional(),
    enfermeda_id_fk: z.number().int().positive().optional(),
  }),
});