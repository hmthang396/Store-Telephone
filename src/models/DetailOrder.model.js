const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const DetailOrder = sequelize.define("DetailOrder", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        price: DataTypes.DOUBLE,
        num: DataTypes.SMALLINT,
        total: DataTypes.DOUBLE,
    });
    return DetailOrder;
};