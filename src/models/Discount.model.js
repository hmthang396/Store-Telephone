/*
 * Bảng Discount
 * Lưu các giảm giá chọn theo sản phẩm
 * vd: Color [-9%,-5.000.000đ,...]
 *
 * Bảng Discount có quan hệ 1:1 với Product
 * ForeignKey nằm trên Discount là PrimaryKey của bảng Product
 */
const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Discount = sequelize.define("Discount", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        title: DataTypes.STRING,
        discount: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        startedAt: DataTypes.DATEONLY,
        endedAt: DataTypes.DATEONLY,
    });
    return Discount;
};