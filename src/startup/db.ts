import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('MS', 'root', '123456', {
    dialect: 'mysql',
    host: 'localhost'
});
