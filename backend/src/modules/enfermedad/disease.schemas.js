import { z } from "zod";

export const registerDiseaseSchema = z.object({
  body: z.object({
    tipo: z.string().min(2),
    descripcion: z.string().optional(),
    
  }),
});

export const updateDiseaseSchema = z.object({
  body: z.object({
    tipo: z.string().min(2).optional(),
    descripcion: z.string().optional(),
  
  }),
});