import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express, { json } from "express";

const prisma = new PrismaClient();

const app = express();

app.use(cors({ origin: process.env.FRONT_URL }));
app.use(json());

app.listen(3333, () => console.log("Servidor Ligado!!!"));
