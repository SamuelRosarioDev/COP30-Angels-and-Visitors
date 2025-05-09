// src/repositories/evento.repository.ts
import { prisma } from "../factories/prisma.factory";
import type { CreateEventoDTO } from "../dtos/evento.dto";

export const EventoRepository = {
  create: (data: CreateEventoDTO) => prisma.evento.create({ data }),

  findAll: () => prisma.evento.findMany(),

  findById: (id: number) => prisma.evento.findUnique({ where: { id } }),

  update: (id: number, data: Partial<CreateEventoDTO>) =>
    prisma.evento.update({ where: { id }, data }),

  delete: (id: number) => prisma.evento.delete({ where: { id } }),
};
