import { z } from "zod";

export const crearDetDiseaseSchema = z.object({
  body: z.object({
    historial_clinico_id_fk: z.number().int().positive(),
    enfermedad_id_fk: z.number().int().positive(),
    fecha_inicio: z.string().datetime().or(z.date()),
    fecha_fin: z.string().datetime().or(z.date()),
    descripcion: z.string().min(5),
  }),
});

export const actualizarDetDiseaseSchema = z.object({
  body: z.object({
    historial_clinico_id_fk: z.number().int().positive().optional(),
    enfermedad_id_fk: z.number().int().positive().optional(),
    fecha_inicio: z.string().datetime().or(z.date()).optional(),
    fecha_fin: z.string().datetime().or(z.date()).optional(),
    descripcion: z.string().min(5).optional(),
  }),
});
