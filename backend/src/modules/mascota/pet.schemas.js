import { z } from "zod";

export const registrarPetSchema = z.object({
  body: z.object({
    nombre: z.string().min(2),
    especie: z.string().min(2),
    raza: z.string().min(2),
    sexo: z.string().min(1),
    // Acepta una fecha tipo string, por ejemplo "2022-06-10"
    fecha_nacimiento: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Debe ser una fecha válida (YYYY-MM-DD)",
      }),
    url_foto: z.string().min(1).optional(),
    usuario_id_fk: z.number().int().positive(),
  }),
});

export const actualizarPetSchema = z.object({
  body: z.object({
    nombre: z.string().min(2),
    especie: z.string().min(2),
    raza: z.string().min(2),
    sexo: z.string().min(1),
    fecha_nacimiento: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Debe ser una fecha válida (YYYY-MM-DD)",
      }),
    url_foto: z.string().min(1).optional(),
    usuario_id_fk: z.number().int().positive(),
  }),
});
