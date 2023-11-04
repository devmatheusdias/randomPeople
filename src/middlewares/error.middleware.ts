import httpStatus from "http-status";
import { Request, Response, NextFunction } from "express";
import { CustomError } from "@/protocols/customError.protocol";

export default function errorHandler(error: CustomError, req: Request, res: Response, next: NextFunction){

    if(error.type === "notFound"){
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }

    if(error.type === "badRequest"){
        return res.status(httpStatus.BAD_REQUEST).send(error.message)
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(`Sorry, something went wrong`)
}