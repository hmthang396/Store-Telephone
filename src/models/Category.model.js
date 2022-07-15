/*
 * Bảng Category
 * vd: Category [Iphone,Samsung,...]
 *
 */
const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("Categorie", {
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
    });
    return Category;
};