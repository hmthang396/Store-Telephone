const db = require("../../models/index");
module.exports = {
    get: async(req, res) => {
        try {
            const categories = await db.Category.findAll();
            const options = await db.Option.findAll();
            res.render("Admin/Prd_Opt.Form.ejs", {
                Message: "Create",
                Category: categories,
                Option: options,
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
            const prdOpt = await db.Prd_Opt.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (prdOpt) {
                const categories = await db.Category.findAll();
                const options = await db.Option.findAll();
                const product = await db.Product.findOne({
                    where: {
                        id: prdOpt.productId,
                    },
                    attributes: ["id", "title", "categoryId"],
                });
                res.render("Admin/Prd_Opt.Form.ejs", {
                    Message: "Update",
                    Category: categories,
                    Option: options,
                    ProOpt: prdOpt,
                    Product: product,
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
    post: async(req, res) => {
        try {
            const productId = req.body.productId;
            const optionId = req.body.optionId;
            const price = req.body.price;
            let product = await db.Product.findOne({
                where: {
                    id: productId,
                },
            });
            let option = await db.Option.findOne({
                where: {
                    id: optionId,
                },
            });
            if (product && option) {
                let Prd_Option = await product.addOptions(option, {
                    through: { price: price },
                });
                if (Prd_Option[0]) {
                    res.redirect("/Admin/PrdOpt");
                } else {
                    res.json({
                        Data: Prd_Option,
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
    postById: async(req, res) => {
        try {
            const prdOptOld = await db.Prd_Opt.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (prdOptOld) {
                let prd_OptUpdate = await db.Prd_Opt.update({ price: req.body.price }, {
                    where: {
                        id: req.params.id,
                    },
                });
                if (prd_OptUpdate[0]) {
                    res.redirect(`/Admin/PrdOpt/${req.params.id}`);
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
            const prdOptOld = await db.Prd_Opt.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (prdOptOld) {
                const prdOptDelete = await db.Prd_Opt.destroy({
                    where: {
                        id: req.params.id,
                    },
                });
                if (prdOptDelete) {
                    res.redirect("/Admin/PrdOpt");
                } else {
                    res.json({
                        Data: null,
                        ErrorCode: 4,
                        Message: "Không tồn tại dữ liệu trong hệ thống",
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
};