import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    "employee",
    "postgres",
    "postgres",
    {
        host: "localhost",
        dialect: "postgres"
    }
);