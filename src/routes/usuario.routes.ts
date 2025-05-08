import { type RequestHandler, Router } from "express";
import { UsuarioController } from "../controllers/usuario.controller";
import { prisma } from "../factories/prisma.factory";
import { validate } from "../middlewares/validator.middleware";
import { createUsuarioSchema } from "../dtos/usuario.dto";

export const usuarioRoutes = Router();
const controller = new UsuarioController(prisma);

usuarioRoutes.get("/", controller.index.bind(controller) as RequestHandler);
usuarioRoutes.get("/:id", controller.show.bind(controller) as RequestHandler);
usuarioRoutes.post(
	"/",
	validate(createUsuarioSchema),
	controller.create.bind(controller) as RequestHandler,
);
usuarioRoutes.put(
	"/:id",
	validate(createUsuarioSchema),
	controller.update.bind(controller) as RequestHandler,
);
usuarioRoutes.delete("/:id", controller.delete.bind(controller) as RequestHandler);
