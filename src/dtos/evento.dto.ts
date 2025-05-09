// src/dtos/createEvento.dto.ts
import { z } from "zod";

export const createEventoSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  data: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Data deve estar no formato YYYY-MM-DD"),
  horario: z.string().regex(/^\d{2}:\d{2}$/, "Horário deve estar no formato HH:MM"),
  lugar: z.string().min(1, "Lugar é obrigatório"),
});

export type CreateEventoDTO = z.infer<typeof createEventoSchema>;