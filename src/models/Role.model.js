const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("Role", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.ENUM("Administrator ", "Editor", "Customer"),
    });
    return Role;
};