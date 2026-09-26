import {Request,Response,NextFunction} from "express"
import Joi from "joi"
export const validate = (schema:Joi.Schema,source :'query' | 'body' = 'body') =>
{
    return (req:Request,res:Response,next:NextFunction) =>
    {
    
        const data = req.method == 'POST'? req.body :req.query
        const {error} = schema.validate(data)
        if (error)
        {
            return res.status(400).send(
                {
                    "error":error.details[0].message
                }
            )
        }
        next();

    }

}