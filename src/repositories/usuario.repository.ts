import { prisma } from "../factories/prisma.factory";
import type { CreateUsuarioDTO } from "../dtos/usuario.dto";

export const UsuarioRepository = {
  create: (data: CreateUsuarioDTO) => prisma.usuario.create({ data }),

  findAll: () => prisma.usuario.findMany(),

  findById: (id: number) => prisma.usuario.findUnique({ where: { id } }),

  update: (id: number, data: Partial<CreateUsuarioDTO>) =>
    prisma.usuario.update({ where: { id }, data }),

  delete: (id: number) => prisma.usuario.delete({ where: { id } }),
};
