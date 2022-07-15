/*
 * Bảng Option
 * Lưu các Lựu chọn theo sản phẩm và của hãng khác nhau
 * vd: Option [256GB,512GB,1TB]
 *
 * Bảng Option có quan hệ 1:n với Category
 * ForeignKey "CategoryId" nằm trên Option là PrimaryKey của bảng Category
 */
const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Option = sequelize.define("Option", {
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
        description: {
            type: DataTypes.STRING,
            notEmpty: true,
            unique: true,
            allowNull: false,
        },
    });
    return Option;
};