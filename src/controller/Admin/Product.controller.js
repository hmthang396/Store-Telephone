const db = require("../../models/index");
const fs = require("fs");
const path = require("path");

function checkFileExists(file) {
    return new Promise((resolve, reject) => {
        fs.access(file, fs.constants.F_OK, (error) => {
            resolve(!error);
        });
    });
}
module.exports = {
    get: async(req, res) => {
        try {
            const categories = await db.Category.findAll();
            const parameters = await db.Parameter.findAll();
            res.render("Admin/Product.Form.ejs", {
                Message: "Create",
                Category: categories,
                Parameter: parameters,
            });
        } catch (err) {
            res.json({
                Data: err,
                ErrorCode: 99,
                Message: "Lỗi trong quá trình xử lý ",
            });
        }
    },
    getAllElement: async(req, res) => {
        try {
            const products = await db.Product.findAll({
                include: [db.Color, db.Option, db.Category, db.Parameter, db.Discount],
            });
            if (products.length > 0) {
                const Detail = products.map((p) => {
                    return {
                        Product: {
                            id: p.dataValues.id,
                            title: p.dataValues.title,
                            price: p.dataValues.price,
                            description: p.dataValues.description,
                            image: p.dataValues.image,
                            stock: p.dataValues.stock,
                            createdAt: p.dataValues.createdAt,
                            updatedAt: p.dataValues.updatedAt,
                        },
                        Parameter: p.dataValues.Parameter,
                        Category: p.dataValues.Categorie,
                        Discount: p.dataValues.Discount,

                        Color: p.dataValues.Colors.map((color) => {
                            return color.dataValues;
                        }),
                        Option: p.dataValues.Options.map((option) => {
                            return option.dataValues;
                        }),
                    };
                });
                res.render("Admin/Product.Table.ejs", {
                    Product: Detail,
                });
            } else {
                res.render("Admin/Product.Table.ejs", {
                    Product: [],
                });
            }
        } catch (err) {
            res.json({
                Data: err,
                ErrorCode: 99,
                Message: "Lỗi trong quá trình xử lý ",
            });
        }
    },
    getById: async(req, res) => {
        try {
            const categories = await db.Category.findAll();
            const parameters = await db.Parameter.findAll();
            const product = await db.Product.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (product) {
                res.render("Admin/Product.Form.ejs", {
                    Message: "Update",
                    Category: categories,
                    Parameter: parameters,
                    Product: product.dataValues,
                });
            } else {
                res.json({
                    Data: [],
                    ErrorCode: 4,
                    Message: "Không tồn tại dữ liệu trong hệ thống",
                });
            }
        } catch (err) {
            res.json({
                Data: err,
                ErrorCode: 99,
                Message: "Lỗi trong quá trình xử lý ",
            });
        }
    },
    post: async(req, res, next) => {
        try {
            const fileImage = req.file.filename;
            const productObj = {
                title: req.body.title,
                price: req.body.price,
                description: req.body.description,
                image: `/Image/${fileImage}`,
                stock: req.body.stock,
                parameterId: req.body.parameterId,
                categoryId: req.body.categoryId,
                discountId: req.body.discountId,
            };
            const product = await db.Product.create(productObj);
            if (product) {
                res.redirect("/Admin/Product");
            }
        } catch (err) {
            res.json({
                Data: err,
                ErrorCode: 99,
                Message: "Lỗi trong quá trình xử lý ",
            });
        }
    },
    postById: async(req, res, next) => {
        try {
            const productOld = await db.Product.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (productOld) {
                const imagePath = path.join(
                    __dirname,
                    `../../public${productOld.dataValues.image}`
                );
                if (await checkFileExists(imagePath)) {
                    await fs.promises.unlink(imagePath);
                }
                const fileImage = req.file.filename;
                const productObj = {
                    title: req.body.title,
                    price: req.body.price,
                    description: req.body.description,
                    image: `/Image/${fileImage}`,
                    stock: req.body.stock,
                    parameterId: req.body.parameterId,
                    categoryId: req.body.categoryId,
                    discountId: req.body.discountId,
                };
                const product = await db.Product.update(productObj, {
                    where: {
                        id: req.params.id,
                    },
                });
                if (product[0]) {
                    res.redirect(`/Admin/Product/${req.params.id}`);
                } else {
                    res.json({
                        Data: product,
                        ErrorCode: 99,
                        Message: "Lỗi trong quá trình xử lý ",
                    });
                }
            } else {
                res.json({
                    Data: [],
                    ErrorCode: 4,
                    Message: "Không tồn tại dữ liệu trong hệ thống",
                });
            }
        } catch (err) {
            res.json({
                Data: err,
                ErrorCode: 99,
                Message: "Lỗi trong quá trình xử lý ",
            });
        }
    },
    delete: async(req, res) => {
        try {
            const productOld = await db.Product.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (productOld) {
                const productDelete = await db.Product.destroy({
                    where: {
                        id: req.params.id,
                    },
                });
                if (productDelete) {
                    res.redirect("/Admin/Product");
                } else {
                    res.json({
                        Data: null,
                        ErrorCode: 4,
                        Message: "Không tồn tại dữ liệu trong hệ thống",
                    });
                }
            } else {
                res.json({
                    Data: null,
                    ErrorCode: 4,
                    Message: "Không tồn tại dữ liệu trong hệ thống",
                });
            }
        } catch (err) {
            res.json({
                Data: err,
                ErrorCode: 99,
                Message: "Lỗi trong quá trình xử lý ",
            });
        }
    },
};