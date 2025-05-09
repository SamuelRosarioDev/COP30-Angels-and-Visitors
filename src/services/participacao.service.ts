// src/services/participacao.service.ts
import { prisma } from "../factories/prisma.factory";
import type { CreateParticipacaoDTO } from "../dtos/createParticipacao.dto";

export const ParticipacaoService = {
  create: async (dto: CreateParticipacaoDTO, idVisitor: number) => {
    return prisma.participacao.create({
      data: {
        ...dto,
        id_visitor: idVisitor,
      },
    });
  },

  findAll: () =>
    prisma.participacao.findMany({
      include: {
        evento: true,
        visitor: true,
      },
    }),

  findByVisitor: (idVisitor: number) =>
    prisma.participacao.findMany({
      where: { id_visitor: idVisitor },
      include: { evento: true },
    }),
};
