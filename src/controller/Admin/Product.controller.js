const db = require("../../models/index");
const fs = require("fs").promises;
const path = require("path");
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
                await fs.unlink(imagePath);
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