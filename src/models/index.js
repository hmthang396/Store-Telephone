const Sequelize = require("sequelize");
const sequelize = new Sequelize("Test", "root", "admin123", {
    dialect: "mysql",
    host: "localhost",
    dialectOptions: {
        authentication: {
            type: "default",
            options: {
                domain: "localhost",
                userName: "root",
                password: "admin123",
            },
        },
        options: {
            encrypt: false,
        },
    },
});
const db = {};

db.Role = require("./Role.model")(sequelize, Sequelize);
db.User = require("./User.model")(sequelize, Sequelize);
db.Category = require("./Category.model")(sequelize, Sequelize);
db.Option = require("./Option.model")(sequelize, Sequelize);
db.Color = require("./Color.model")(sequelize, Sequelize);
db.Discount = require("./Discount.model")(sequelize, Sequelize);
db.Parameter = require("./Parameter.model")(sequelize, Sequelize);
db.Product = require("./Product.model")(sequelize, Sequelize);
db.Feedback = require("./Feedback.model")(sequelize, Sequelize);
db.Order = require("./Order.model")(sequelize, Sequelize);
db.DetailOrder = require("./DetailOrder.model")(sequelize, Sequelize);
db.Cart = require("./Cart.model")(sequelize, Sequelize);
db.Prd_Col = require("./Prd_Col.model")(sequelize, Sequelize);
db.Prd_Opt = require("./Prd_Opt.model")(sequelize, Sequelize);

// Tạo các mối liên hệ giữa các Table
/*
 * Has Many
 * Table Role HasOne Table User
 * Table User BeLongTo Table Role
 */
db.Role.hasMany(db.User, {
    foreignKey: {
        name: "roleId",
    },
});
db.User.belongsTo(db.Role, {
    foreignKey: {
        name: "categoryId",
    },
});
/*
 * Has Many
 * Table Product HasOne Table DetailOrder
 * Table DetailOrder BeLongTo Table Product
 */
db.Product.hasMany(db.DetailOrder, {
    foreignKey: {
        name: "productId",
    },
});
db.DetailOrder.belongsTo(db.Product, {
    foreignKey: {
        name: "productId",
    },
});
/*
 * Has Many
 * Table Parameter HasOne Table Product
 * Table Product BeLongTo Table Parameter
 */
db.Parameter.hasMany(db.Product, {
    foreignKey: {
        name: "parameterId",
    },
});
db.Product.belongsTo(db.Parameter, {
    foreignKey: {
        name: "parameterId",
    },
});
/*
 * Has Many
 * Table Category HasOne Table Product
 * Table Product BeLongTo Table Category
 */
db.Category.hasMany(db.Product, {
    foreignKey: {
        name: "categoryId",
    },
});
db.Product.belongsTo(db.Category, {
    foreignKey: {
        name: "categoryId",
    },
});
/*
 * Has Many
 * Table Category HasOne Table Option
 * Table Option BeLongTo Table Category
 */
// db.Category.hasMany(db.Option, {
//     foreignKey: {
//         name: "categoryId",
//     },
// });
// db.Option.belongsTo(db.Category, {
//     foreignKey: {
//         name: "categoryId",
//     },
// });
/*
 * Has Many
 * Table Category HasOne Table Color
 * Table Color BeLongTo Table Category
 */
// db.Category.hasMany(db.Color, {
//     foreignKey: {
//         name: "categoryId",
//     },
// });
// db.Color.belongsTo(db.Category, {
//     foreignKey: {
//         name: "categoryId",
//     },
// });
/*
 * Has Many
 * Table Discount HasOne Table Product
 * Table Product BeLongTo Table Discount
 */
db.Discount.hasMany(db.Product, {
    foreignKey: {
        name: "discountId",
    },
});
db.Product.belongsTo(db.Discount, {
    foreignKey: {
        name: "discountId",
    },
});
/*
 * Has Many
 * Table Product HasOne Table Feedback
 * Table Feedback BeLongTo Table Product
 */
db.Product.hasMany(db.Feedback, {
    foreignKey: {
        name: "productId",
    },
});
db.Feedback.belongsTo(db.Product, {
    foreignKey: {
        name: "productId",
    },
});
/*
 * Many To Many
 * Table Product BeLongsToMany Table Option
 * Table Option BeLongsToMany Table Product
 */
db.Option.belongsToMany(db.Product, {
    through: { model: db.Prd_Opt, unique: true },
    foreignKey: {
        name: "optionId",
    },
});
db.Product.belongsToMany(db.Option, {
    through: { model: db.Prd_Opt, unique: true },
    foreignKey: {
        name: "productId",
    },
});

/*
 * Many To Many
 * Table Product BeLongsToMany Table Color
 * Table Color BeLongsToMany Table Product
 */
db.Product.belongsToMany(db.Color, {
    through: { model: db.Prd_Col, unique: true },
    foreignKey: "productId",
});
db.Color.belongsToMany(db.Product, {
    through: { model: db.Prd_Col, unique: true },
    foreignKey: "colorId",
});
/*
 * Many To Many
 * Table Order BeLongsToMany Table DetailOrder
 * Table DetailOrder BeLongsToMany Table Order
 */
db.Order.belongsToMany(db.DetailOrder, {
    through: { model: db.Cart, unique: true },
    foreignKey: "orderId",
});
db.DetailOrder.belongsToMany(db.Order, {
    through: { model: db.Cart, unique: true },
    foreignKey: "detailOrderId",
});
// End
db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db;