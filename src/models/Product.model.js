/*
 * Bảng Product
 */
const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("Product", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false,
        },
        price: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            notEmpty: true,
            allowNull: false,
        },
        image: DataTypes.STRING,
        stock: DataTypes.SMALLINT,
    });
    return Product;
};