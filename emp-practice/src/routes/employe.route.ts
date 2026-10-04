import {Router} from "express"
import { getEmployees,createEmployee,getEmployeeById, updateEmployee, deleteEmployee } from "../controllers/employe.controller"
import { getEmployeesSchema,createEmpSchema,getEmployeesByIdSchema } from "../validations/validator"
import { validate } from "../middleware/validation.middleware"
const router = Router()
router.get("/",validate(getEmployeesSchema),getEmployees)
router.post("/",validate(createEmpSchema),createEmployee)
router.get("/:id",getEmployeeById)
router.put("/",updateEmployee)
router.delete("/:id",deleteEmployee)

export default router