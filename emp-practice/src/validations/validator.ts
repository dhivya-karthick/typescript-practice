import Joi from "joi"

export const employeeSchema = Joi.object({
    "name":Joi.string().required(),
    "age":Joi.number().required()
})

export const getEmployeesSchema = Joi.object({
    "page":Joi.number().min(1).required(),
    "limit":Joi.number().min(1).required()
})