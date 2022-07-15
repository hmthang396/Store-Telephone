/*
 * Bảng Color
 * Lưu các Lựu chọn theo sản phẩm và của hãng khác nhau
 * vd: Color [Blue,Black,...]
 *
 * Bảng Color có quan hệ 1:n với Category
 * ForeignKey nằm trên Color là PrimaryKey của bảng Category
 */
const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Color = sequelize.define("Color", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            notEmpty: true,
            unique: true,
            allowNull: false,
        },
        hex: {
            type: DataTypes.STRING,
            notEmpty: true,
            unique: true,
            allowNull: false,
        },
    });
    return Color;
};