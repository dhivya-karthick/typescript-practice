import {NextFunction, Request, Response} from "express"
export const getEmployees =(req:Request,res:Response) =>
{
    const employees = [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
        { id: 4, name: "D" },
        { id: 5, name: "E" },
        { id: 6, name: "F" },
        { id: 7, name: "G" },
        { id: 8, name: "H" },
        { id: 9, name: "I" },
        { id: 10, name: "J" }
        ];
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const offset = (page -1) *limit
    const resp = employees.slice(offset,offset + limit)

    console.log("Inside Controller")
    res.send({
       "response":resp
    })
}

export const createEmployee = (req:Request,res:Response,next:NextFunction) =>
{
    try
    {
         console.log("Create Employee method ")
         throw new Error("Database connection failed");
    res.send({
        "name":"Dhivya",
        "age":12
    })

    }
    catch(error)
    {
        next(error)
    }
   

}