import express from "express";
import employeRoutes from "./routes/employe.route"
import { logger } from "./middleware/logger.middleware";
import { errorHandler } from "./middleware/errorhandler.middleware";
import { validate } from "./middleware/validation.middleware";
import { employeeSchema } from "./validations/validator";
import dotenv from "dotenv";
dotenv.config();
const app =express()
app.use(logger)
app.use(express.json())
app.use("/employees",employeRoutes)
app.use(errorHandler)
app.listen(process.env.PORT,()=>
{
console.log(`server listening on prt ${process.env.port}`)
});



