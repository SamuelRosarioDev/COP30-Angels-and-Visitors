// src/services/evento.service.ts
import { EventoRepository } from "../repositories/evento.repository";
import type { CreateEventoDTO } from "../dtos/evento.dto";

export const EventoService = {
  create: (dto: CreateEventoDTO) => EventoRepository.create(dto),

  findAll: () => EventoRepository.findAll(),

  findById: (id: number) => EventoRepository.findById(id),

  update: (id: number, dto: Partial<CreateEventoDTO>) =>
    EventoRepository.update(id, dto),

  delete: (id: number) => EventoRepository.delete(id),
};
