import { z } from "zod";

export const registrarPetSchema = z.object({
  body: z.object({
    nombre: z.string().min(2),
    especie: z.string().min(2),
    raza: z.string().min(2),
    edad: z.number().int().positive(),
    sexo: z.string().min(1),
    usuario_id_fk: z.number().int().positive(),
  }),
});


export const actualizarPetSchema = z.object({
  body: z.object({
    nombre: z.string().min(2).optional(),
    especie: z.string().min(2).optional(),
    raza: z.string().min(2).optional(),
    edad: z.number().int().positive().optional(),
    sexo: z.string().min(1).optional(),
    usuario_id_fk: z.number().int().positive().optional(),
  }),
});