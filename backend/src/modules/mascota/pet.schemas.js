import { z } from "zod";

export const crearMascotaSchema = z.object({
  body: z.object({
    nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    especie: z.string().min(2, "La especie es requerida"),
    raza: z.string().min(2, "La raza es requerida"),
    edad: z.number().int().positive("La edad debe ser un número positivo"),
    sexo: z.string().min(1, "El sexo es requerido"),
    usuario_id_fk: z.number().int().positive(),
  }),
});

export const actualizarMascotaSchema = z.object({
  body: z.object({
    nombre: z.string().min(2).optional(),
    especie: z.string().min(2).optional(),
    raza: z.string().min(2).optional(),
    edad: z.number().int().positive().optional(),
    sexo: z.string().min(1).optional(),
    usuario_id_fk: z.number().int().positive().optional(),
  }),
});