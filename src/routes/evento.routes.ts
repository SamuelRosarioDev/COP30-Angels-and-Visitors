// src/routes/evento.routes.ts
import { Router, type RequestHandler } from "express";
import { EventoController } from "../controllers/evento.controller";
import { prisma } from "../factories/prisma.factory";
import { validate } from "../middlewares/validator.middleware";
import { createEventoSchema } from "../dtos/evento.dto";

export const eventoRoutes = Router();
const controller = new EventoController(prisma);

eventoRoutes.get("/", controller.index.bind(controller) as RequestHandler);
eventoRoutes.get("/:id", controller.show.bind(controller) as RequestHandler);
eventoRoutes.post(
  "/",
  validate(createEventoSchema),
  controller.create.bind(controller) as RequestHandler
);
eventoRoutes.put(
  "/:id",
  validate(createEventoSchema),
  controller.update.bind(controller) as RequestHandler
);
eventoRoutes.delete("/:id", controller.delete.bind(controller) as RequestHandler);
