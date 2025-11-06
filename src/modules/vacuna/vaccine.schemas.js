import { z } from "zod";

export const registrarVaccineSchema = z.object({
  body: z.object({
    nombre: z.string().min(2),
    descripcion: z.string().min(5)
  }),
});

export const actualizarVaccineSchema = z.object({
  body: z.object({
    nombre: z.string().min(2).optional(),
    descripcion: z.string().min(5).optional()
  }),
});

