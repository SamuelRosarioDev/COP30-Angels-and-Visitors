// src/controllers/evento.controller.ts
import { Request, Response } from "express";
import { EventoService } from "../services/evento.service.ts";

export class EventoController {
  async create(req: Request, res: Response) {
    const usuario = req.user; // você deve recuperar isso via middleware de autenticação

    if (usuario.tipo !== "ANGEL") {
      return res.status(403).json({ message: "Apenas usuários ANGEL podem criar eventos." });
    }

    const evento = await EventoService.create(req.body, usuario.id);
    return res.status(201).json(evento);
  }

  async index(req: Request, res: Response) {
    const eventos = await EventoService.findAll();
    return res.json(eventos);
  }
}
