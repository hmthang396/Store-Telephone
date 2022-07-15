const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Feedback = sequelize.define("Feedback", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        fullname: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false,
        },
        feedback: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false,
        },
    });
    return Feedback;
};