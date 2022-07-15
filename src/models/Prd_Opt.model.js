/*
 * Bảng trung gian giữa bảng Option & Product
 * Quan hệ n:n
 * Cặp Foreign-Key (OptionId & ProductId) là unique
 * Foreign-Key "OptionId" là Primary-Key của bảng Option
 * Vì mỗi "Option && Product" khác nhau sẽ có giá khác nhau => add colum Price
 */
const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Prd_Opt = sequelize.define("Product_Option", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        price: {
            type: DataTypes.DOUBLE,
        },
    });
    return Prd_Opt;
};