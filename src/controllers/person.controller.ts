import {Request, Response} from "express"
import httpStatus from "http-status"
import personServices from "@/services/person.services";

async function getPerson(req: Request, res: Response): Promise<void>{
    const result = await personServices.getPerson();
    res.status(httpStatus.OK).send(result)
}

const personController = {getPerson};

export default personController;