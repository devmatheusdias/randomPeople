import Router from "express";
import personRouter from "./person.router";

const routes = Router();
routes.use(personRouter)

export default routes;
