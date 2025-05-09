// src/services/evento.service.ts
import { prisma } from "../factories/prisma.factory";
import type { CreateEventoDTO } from "../dtos/evento.dto";

export const EventoService = {
  create: (dto: CreateEventoDTO, idAngel: number) => {
    return prisma.evento.create({
      data: {
        ...dto,
        id_angel: idAngel,
      },
    });
  },

  findAll: () => prisma.evento.findMany({ include: { criador: true } }),
};
