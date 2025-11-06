import { z } from "zod";

export const registrarDetOperacionSchema = z.object({
  body: z.object({
    historial_clinico_id_fk: z.number({ required_error: "El historial clínico es obligatorio" }),
    operacion_id_fk: z.number({ required_error: "La operación es obligatoria" }),
    fecha: z.string().datetime().or(z.string().min(1, "La fecha es obligatoria")),
    observaciones: z.string().min(5, "Las observaciones deben tener al menos 5 caracteres"),
  }),
});

export const actualizarDetOperacionSchema = z.object({
  body: z.object({
    fecha: z.string().datetime().optional(),
    observaciones: z.string().min(5).optional(),
  }),
});



