const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Cart = sequelize.define("Cart", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
    });
    return Cart;
};