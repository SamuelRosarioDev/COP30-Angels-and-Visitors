// src/dtos/createParticipacao.dto.ts
import { z } from "zod";

export const createParticipacaoSchema = z.object({
  id_evento: z.number(),
});

export type CreateParticipacaoDTO = z.infer<typeof createParticipacaoSchema>;
