import {NextFunction, Request, Response} from "express"
import { Employee } from "../models/employee.model";
export const getEmployees =async(req:Request,res:Response) =>
{
    const employees = await Employee.findAll();
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const offset = (page -1) *limit
    const resp = employees.slice(offset,offset + limit)

    console.log("Inside Controller")
    res.send({
       "response":resp
    })
}

export const createEmployee = async(req:Request,res:Response,next:NextFunction) =>
{
    try
    {
         console.log("Create Employee method ")
         const emp =await  Employee.create({
            name:req.body.name,
            age:req.body.age,
            department:req.body.department

         })
         res.status(201).send(emp)
    }
    catch(error)
    {
        next(error)
    }
   

}

export const getEmployeeById = async(req:Request,res:Response,next:NextFunction) =>
{
    try {
        const empId = Number(req.params.id)
        const empData = await Employee.findByPk(empId)

        if(!empData)
        {
            return res.status(401).send({
                "message":"invalid emp info"
            })
        }

        res.status(201).send(empData)

    }
    catch(error)
    {
        next(error)
    }
}


export const updateEmployee = async(req:Request,res:Response,next:NextFunction) =>
{
    try {
    const updateEmp = Employee.update(req.body,{ where :{
        "id":req.body.id
    }})


    res.status(200).send(updateEmp)
    } catch(error)
    {
        next(error)
    }
}


export const deleteEmployee = async(req:Request,res:Response,next:NextFunction) =>{
    try 
    {
        const emp = Employee.destroy({
            where :{
                "id":req.params?.id
            }
        })
        res.status(200).send(emp)

    }
    catch(error)
    {
        next(error)
    }
}