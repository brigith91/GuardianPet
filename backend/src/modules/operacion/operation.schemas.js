import { z } from "zod";

export const registrarOperationSchema = z.object({
  body: z.object({
    tipo: z.string().min(2, "El tipo es obligatorio y debe tener al menos 2 caracteres"),
    descripcion: z.string().min(5, "La descripción debe tener al menos 5 caracteres"),
  }),
});

export const actualizarOperationSchema = z.object({
  body: z.object({
    tipo: z.string().min(2).optional(),
    descripcion: z.string().min(5).optional(),
  }),
});