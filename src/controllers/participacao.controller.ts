// src/controllers/participacao.controller.ts
import { Request, Response } from "express";
import { ParticipacaoService } from "../services/participacao.service";

export class ParticipacaoController {
  async create(req: Request, res: Response) {
    const usuario = req.user; // obtido pelo middleware de autenticação

    if (usuario.tipo !== "VISITOR") {
      return res.status(403).json({ message: "Apenas VISITORS podem participar de eventos." });
    }

    const participacao = await ParticipacaoService.create(req.body, usuario.id);
    return res.status(201).json(participacao);
  }

  async index(req: Request, res: Response) {
    const participacoes = await ParticipacaoService.findAll();
    return res.json(participacoes);
  }

  async minhasParticipacoes(req: Request, res: Response) {
    const usuario = req.user;

    if (usuario.tipo !== "VISITOR") {
      return res.status(403).json({ message: "Apenas VISITORS têm participações." });
    }

    const participacoes = await ParticipacaoService.findByVisitor(usuario.id);
    return res.json(participacoes);
  }
}
