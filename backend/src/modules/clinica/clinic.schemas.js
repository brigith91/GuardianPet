import { z } from "zod";

export const registerClinicSchema = z.object({
  body: z.object({
    tienda: z.string().min(2),
    direccion: z.string().min(5),
    telefono: z.string().min(7),
    latitud: z.number().min(2).max(90),
    longitud: z.number().min(2).max(180),
  }),
});

export const updateClinicSchema = z.object({
  body: z.object({
    tienda: z.string().min(2).optional(),
    direccion: z.string().min(5).optional(),
    telefono: z.string().min(7).optional(),
    latitud: z.number().min(2).max(90).optional(),
    longitud: z.number().min(2).max(180).optional(),
  }),
});