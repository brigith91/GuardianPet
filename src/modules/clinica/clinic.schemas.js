import { z } from "zod";

export const registerClinicSchema = z.object({
  body: z.object({
    tienda: z.string().min(2),
    direccion: z.string().min(5),
    telefono: z.string().min(7),
    latitud: z.number(),
    longitud: z.number(),
  }),
});

export const updateClinicSchema = z.object({
  body: z.object({
    tienda: z.string().min(2).optional(),
    direccion: z.string().min(5).optional(),
    telefono: z.string().min(7).optional(),
    latitud: z.number(),
    longitud: z.number(),
  }),
});