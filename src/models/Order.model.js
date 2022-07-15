const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("Order", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        fullname: DataTypes.STRING,
        email: DataTypes.STRING,
        phone_number: DataTypes.STRING,
        address: DataTypes.STRING,
        note: DataTypes.TEXT,
        order_date: DataTypes.DATEONLY,
        status: DataTypes.SMALLINT,
    });
    return Order;
};