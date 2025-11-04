import { z } from "zod";

export const registrarVaccineSchema = z.object({
  body: z.object({
    nombre: z.string().min(2),
    descripcion: z.string().min(5),
    historial_clinico_id_fk: z.number().int().positive(),
    fecha: z.string().datetime().or(z.date()),
    observaciones: z.string().min(5),
  }),
});

export const actualizarVaccineSchema = z.object({
  body: z.object({
    nombre: z.string().min(2).optional(),
    descripcion: z.string().min(5).optional(),
    historial_clinico_id_fk: z.number().int().positive().optional(),
    fecha: z.string().datetime().or(z.date()).optional(),
    observaciones: z.string().min(5).optional(),
  }),
});
