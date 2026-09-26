import {Router} from "express"
import { getEmployees,createEmployee } from "../controllers/employe.controller"
import { getEmployeesSchema } from "../validations/validator"
import { validate } from "../middleware/validation.middleware"
const router = Router()
router.get("/",validate(getEmployeesSchema),getEmployees)
router.post("/",createEmployee)


export default router