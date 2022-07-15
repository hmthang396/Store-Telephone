const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        fullname: DataTypes.STRING,
        email: DataTypes.STRING,
        phone_number: DataTypes.STRING,
        address: DataTypes.STRING,
    });
    return User;
};