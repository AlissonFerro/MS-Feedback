import Sequelize from "sequelize";
import { sequelize } from "../startup/db";

export const Feedback = sequelize.define("Feedback", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    reason: {
        type: Sequelize.ENUM('Produtos', 'Atendimento','Outros'),
        allowNull: false
    },
    productId: {
        type: Sequelize.STRING
    },
    userId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT('long'),
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    status: {
        type: Sequelize.ENUM('Novo', 'Em Analise', 'Resolvido')
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
}, {
    paranoid: true
})