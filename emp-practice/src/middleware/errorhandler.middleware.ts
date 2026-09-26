
import {Request,Response,NextFunction} from "express"
export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction) =>
{
    console.log("Error executed")
    res.status(500).send({
        "message":"Please  try after sometime"
    })

}