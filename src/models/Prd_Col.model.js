/*
 * Bảng trung gian giữa bảng Color & Product
 * Quan hệ n:n
 * Cặp Foreign-Key (ColorId & ProductId) là unique
 * Foreign-Key "ColorId" là Primary-Key của bảng Option
 */
const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Prd_Col = sequelize.define("Product_Color", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        image1: DataTypes.TEXT,
        image2: DataTypes.TEXT,
        image3: DataTypes.TEXT,
        image4: DataTypes.TEXT,
    });
    return Prd_Col;
};