// src/controllers/usuario.controller.ts
import type { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

export class UsuarioController {
  constructor(private prisma: PrismaClient) {}
  async index(req: Request, res: Response) {
    const usuarios = await this.prisma.usuario.findMany();
    res.json(usuarios);
  }
  async show(req: Request, res: Response) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!usuario) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(usuario);
  }

  async create(req: Request, res: Response) {
    const novoUsuario = await this.prisma.usuario.create({ data: req.body });
    res.status(201).json(novoUsuario);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const usuarioAtualizado = await this.prisma.usuario.update({
      where: { id: Number(id) },
      data: req.body,
    });
    res.json(usuarioAtualizado);
  }

  async delete(req: Request, res: Response) {
    await this.prisma.usuario.delete({ where: { id: Number(req.params.id) } });
    res.status(204).send();
  }
}
