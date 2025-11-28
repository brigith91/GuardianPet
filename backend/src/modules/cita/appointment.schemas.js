import { z } from "zod";

export const registrarCitaSchema = z.object({
  body: z.object({
    fecha: z.string().refine((v) => !isNaN(Date.parse(v)), {
      message: "Debe ser una fecha válida (YYYY-MM-DDTHH:mm:ssZ)",
    }),
    estado: z.string().min(2),
    observacion: z.string().optional(),
    mascota_id_fk: z.number().int().positive(),       
    veterinario_id_fk: z.number().int().positive(),
  }),
});

export const actualizarCitaSchema = z.object({
  params: z.object({
    id: z
      .string()
      .refine((v) => !isNaN(parseInt(v)), { message: "ID inválido" })
      .transform((v) => parseInt(v)),
  }),
  body: z.object({
    fecha: z
      .string()
      .refine((v) => !isNaN(Date.parse(v)), {
        message: "Debe ser una fecha válida (YYYY-MM-DDTHH:mm:ssZ)",
      })
      .optional(),
    estado: z.string().min(2).optional(),
    observacion: z.string().optional(),
    mascota_id_fk: z.number().int().positive().optional(),
    veterinario_id_fk: z.number().int().positive().optional(),
  }),
});