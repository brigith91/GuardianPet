import { z } from "zod";

export const registerUserSchema = z.object({
  body: z.object({
    nombre: z.string().min(2),
    email: z.string().email(),
    telefono: z.string().optional(),
    contrasena: z.string().min(6),
    rol: z.enum(["usuario", "admin"]).optional(),
    cedula: z.number().int().positive().min(1000000),
  }),
});

export const loginUserSchema = z.object({
  body: z.object({
    email: z.string().email(),
    contrasena: z.string().min(6),
  }),
});

export const updateUserSchema = z.object({
  body: z.object({
    nombre: z.string().min(2),
    email: z.string().email(),
    telefono: z.string().optional(),
    contrasena: z.string().min(6).optional(),
    rol: z.enum(["usuario", "admin"]).optional(),
    cedula: z.number().int().positive().min(1000000).optional(),
  }),
});