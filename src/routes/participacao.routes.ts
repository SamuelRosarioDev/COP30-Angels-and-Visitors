// src/routes/participacao.routes.ts
import { Router, type RequestHandler } from "express";
import { ParticipacaoController } from "../controllers/participacao.controller";
import { validate } from "../middlewares/validator.middleware";
import { createParticipacaoSchema } from "../dtos/createParticipacao.dto";

export const participacaoRoutes = Router();
const controller = new ParticipacaoController();

participacaoRoutes.get("/", controller.index.bind(controller) as RequestHandler);
participacaoRoutes.get("/minhas", controller.minhasParticipacoes.bind(controller) as RequestHandler);
participacaoRoutes.post(
  "/",
  validate(createParticipacaoSchema),
  controller.create.bind(controller) as RequestHandler,
);
