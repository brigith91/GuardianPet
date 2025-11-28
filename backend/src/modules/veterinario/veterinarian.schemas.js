import { z } from "zod";

export const registerVeterinarianSchema = z.object({
  body: z.object({
    nombre: z.string().min(2,),
    email: z.string().email(),
    matricula: z.string().min(3,),
  }),
});


export const loginVeterinarianSchema = z.object({
  body: z.object({
    email: z.string().email(),
    matricula: z.string().min(3),
  }),
});

export const updateVeterinarianSchema = z.object({
  body: z.object({
    nombre: z.string().min(2,),
    email: z.string().email(),
    matricula: z.string().min(3,),
  }),
});