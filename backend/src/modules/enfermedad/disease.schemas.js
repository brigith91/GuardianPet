import { z } from "zod";

export const registerDiseaseSchema = z.object({
  body: z.object({
    tipo: z.string().min(2),
    fecha_inicio: z.string().datetime(),
    fecha_fin: z.string().datetime().optional(),
    descripcion: z.string().optional(),
    historial_clinico_id_fk: z.number().int().positive(),
  }),
});

export const updateDiseaseSchema = z.object({
  body: z.object({
    tipo: z.string().min(2).optional(),
    fecha_inicio: z.string().datetime().optional(),
    fecha_fin: z.string().datetime().optional(),
    descripcion: z.string().optional(),
    historial_clinico_id_fk: z.number().int().positive().optional(),
  }),
});