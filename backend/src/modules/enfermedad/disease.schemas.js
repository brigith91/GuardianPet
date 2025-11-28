import { z } from "zod";

export const registrarEnfermedadSchema = z.object({
  body: z.object({
    tipo: z.string().min(2),
    descripcion: z.string().min(10),
  }),
});

export const actualizarEnfermedadSchema = z.object({
  body: z.object({
    tipo: z.string().min(2).optional(),
    descripcion: z.string().min(10).optional(),
  }),
});