import { z } from "zod";

export const registrarOperationSchema = z.object({
  body: z.object({
    tipo: z.string().min(2),
    fecha: z.string().datetime().or(z.date()),
    descripcion: z.string().min(10),
    historial_clinico_id_fk: z.number().int().positive(),
  }),
});

export const actualizarOperationSchema = z.object({
  body: z.object({
    tipo: z.string().min(2).optional(),
    fecha: z.string().datetime().or(z.date()).optional(),
    descripcion: z.string().min(10).optional(),
    historial_clinico_id_fk: z.number().int().positive().optional(),
  }),
});