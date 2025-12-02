import { z } from "zod";

export const crearDetDiseaseSchema = z.object({
  body: z.object({
    historial_clinico_id_fk: z.number(),
    enfermedad_id_fk: z.number(),
    fecha_inicio: z.string(), // formato ISO
    fecha_fin: z.string().optional(),
    descripcion: z.string().min(5),
  }),
});

export const actualizarDetDiseaseSchema = z.object({
  body: z.object({
    historial_clinico_id_fk: z.number(),
    enfermedad_id_fk: z.number(),
    fecha_inicio: z.string(),
    fecha_fin: z.string().optional(),
    descripcion: z.string().min(5).optional(),
  }),
});
