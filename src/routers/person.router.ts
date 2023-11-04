import { Router } from "express";
import personController from "@/controllers/person.controller";

const personRouter = Router();

personRouter.get('/person', personController.getPerson)

export default personRouter;