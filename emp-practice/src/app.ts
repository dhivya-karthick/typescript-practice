import express from "express";
import employeRoutes from "./routes/employe.route"
import { logger } from "./middleware/logger.middleware";
import { errorHandler } from "./middleware/errorhandler.middleware";
import { sequelize } from "./config/database";
import dotenv from "dotenv";
import { Employee } from "./models/employee.model";
dotenv.config();
const app =express()
app.use(logger)
app.use(express.json())
app.use("/employees",employeRoutes)
app.use(errorHandler)
sequelize.authenticate()
    .then(() => {
        console.log("Database connected");
        Employee.initialize(sequelize);
        app.listen(process.env.PORT, () => {
            console.log(`server listening on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log("Database connection failed", error);
    });






