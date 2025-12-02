import { z } from "zod";

export const registrarDetVaccineSchema = z.object({
  body: z.object({
    historial_clinico_id_fk: z.number().int().positive(),
    vacuna_id_fk: z.number().int().positive(),
    fecha: z.string().datetime(),
    observaciones: z.string().min(5)
  }),
});

export const actualizarDetVaccineSchema = z.object({
  body: z.object({
    historial_clinico_id_fk: z.number().int().positive(),
    vacuna_id_fk: z.number().int().positive(),
    fecha: z.string().datetime(),
    observaciones: z.string().min(5),
  }),
});

