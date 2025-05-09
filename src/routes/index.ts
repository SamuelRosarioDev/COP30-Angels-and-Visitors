import { Router } from "express";
import { baseRoutes } from "./base.route";
import { usuarioRoutes } from "./usuario.routes";
import { eventoRoutes } from "./evento.routes";

export const routes = Router();

routes.use("/", baseRoutes);
routes.use("/usuarios", usuarioRoutes);
routes.use("/eventos", eventoRoutes);