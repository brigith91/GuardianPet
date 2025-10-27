import { z } from "zod";

export const registrarPetSchema = z.object({
  body: z.object({
    nombre: z.string().min(2),
    especie: z.string().min(2),
    raza: z.string().min(2),
    sexo: z.string().min(1),
    fecha_nacimiento: z.number().int().positive(),
    url_foto: z.string().min(),
    usuario_id_fk: z.number().int().positive(),
  }),
});

export const actualizarPetSchema = z.object({
  body: z.object({
    nombre: z.string().min(2).optional(),
    especie: z.string().min(2).optional(),
    raza: z.string().min(2).optional(),
    fecha_nacimiento: z.number().int().positive().optional(),
    sexo: z.string().min(1).optional(),
    url_foto: z.string().min(1).optional(),
    usuario_id_fk: z.number().int().positive().optional(),
  }),
});