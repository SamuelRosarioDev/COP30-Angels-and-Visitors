// src/controllers/evento.controller.ts
import type { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

export class EventoController {
  constructor(private prisma: PrismaClient) {}
  async index(req: Request, res: Response) {
    const eventos = await this.prisma.usuario.findMany();
    res.json(eventos);
  }
  async show(req: Request, res: Response) {
    const evento = await this.prisma.usuario.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!evento) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(evento);
  }

  async create(req: Request, res: Response) {
    const novoEvento = await this.prisma.usuario.create({ data: req.body });
    res.status(201).json(novoEvento);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const eventoAtualizado = await this.prisma.usuario.update({
      where: { id: Number(id) },
      data: req.body,
    });
    res.json(eventoAtualizado);
  }

  async delete(req: Request, res: Response) {
    await this.prisma.usuario.delete({ where: { id: Number(req.params.id) } });
    res.status(204).send();
  }
}