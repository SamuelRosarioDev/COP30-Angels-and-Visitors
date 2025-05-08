// src/dtos/createUsuario.dto.ts
import { z } from "zod";

export const createUsuarioSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  idioma: z.string().optional(),
  cidade: z.string().optional(),
  disponibilidade: z.string().optional(),
  tipo: z.enum(["ANGEL", "VISITOR"]),
});

export type CreateUsuarioDTO = z.infer<typeof createUsuarioSchema>;
