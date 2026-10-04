import {
    Model,
    DataTypes,
    Optional,
    Sequelize
} from "sequelize";

interface EmployeeAttributes {
    id: number;
    name: string;
    age: number;
    department: string;
}

interface EmployeeCreationAttributes
    extends Optional<EmployeeAttributes, "id"> {}

export class Employee
    extends Model<EmployeeAttributes, EmployeeCreationAttributes>
    implements EmployeeAttributes {

    id!: number;
    name!: string;
    age!: number;
    department!: string;

    static initialize(sequelize: Sequelize) {
        Employee.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: false
                },

                name: {
                    type: DataTypes.STRING(255),
                    allowNull: false
                },

                age: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },

                department: {
                    type: DataTypes.STRING(255),
                    allowNull: false
                }
            },
            {
                sequelize,
                modelName: "Employee",
                tableName: "employees",
                timestamps: false
            }
        );
    }
}