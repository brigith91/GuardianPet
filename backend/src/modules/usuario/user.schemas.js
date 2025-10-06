import { z } from "zod";
export const registerSchema = z.object({
  body: z.object({
    nombre: z.string().min(2),
    email: z.string().email(),
    telefono: z.string().optional(),
    contraseña: z.string().min(6),
    rol: z.enum(["usuario", "admin"]).optional(),
  }),
});
export const loginSchema = z.object({
  body: z.object({ email: z.string().email(), contraseña: z.string().min(6) }),
});