const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("Role", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        updateStatus: DataTypes.BOOLEAN,
        createStatus: DataTypes.BOOLEAN,
        deleteStatus: DataTypes.BOOLEAN,
    });
    return Role;
};