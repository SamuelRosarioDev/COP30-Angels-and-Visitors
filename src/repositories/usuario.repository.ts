import type { CreateUsuarioDTO } from "../dtos/usuario.dto";
import { prisma } from "../factories/prisma.factory";

export class UsuarioRepository {
  constructor(private client = prisma.usuario) {}

  async create(data: CreateUsuarioDTO) {
    return this.client.create({ data });
  }

  async findAll() {
    return this.client.findMany();
  }

  async findById(id: number) {
    return this.client.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<CreateUsuarioDTO>) {
    return this.client.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.client.delete({ where: { id } });
  }
}
