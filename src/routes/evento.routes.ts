// src/routes/evento.routes.ts
import { Router, type RequestHandler } from "express";
import { EventoController } from "../controllers/evento.controller";
import { validate } from "../middlewares/validator.middleware";
import { createEventoSchema } from "../dtos/evento.dto";

export const eventoRoutes = Router();
const controller = new EventoController();

eventoRoutes.get("/", controller.index.bind(controller) as RequestHandler);

eventoRoutes.post(
  "/",
  validate(createEventoSchema),
  controller.create.bind(controller) as RequestHandler,
);
