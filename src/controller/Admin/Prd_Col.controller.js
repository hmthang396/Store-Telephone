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
            const colors = await db.Color.findAll();
            res.render("Admin/Prd_Col.Form.ejs", {
                Message: "Create",
                Category: categories,
                Color: colors,
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
            const Prd_Col = await db.Prd_Col.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (Prd_Col) {
                const categories = await db.Category.findAll();
                const colors = await db.Color.findAll();
                const product = await db.Product.findOne({
                    where: {
                        id: Prd_Col.productId,
                    },
                    attributes: ["id", "title", "categoryId"],
                });
                res.render("Admin/Prd_Col.Form.ejs", {
                    Message: "Update",
                    Category: categories,
                    Color: colors,
                    Product: product,
                    PrdCol: Prd_Col,
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
            const image1 = `/Image/${req.files["file-input1"][0].filename}`;
            const image2 = `/Image/${req.files["file-input2"][0].filename}`;
            const image3 = `/Image/${req.files["file-input3"][0].filename}`;
            const image4 = `/Image/${req.files["file-input4"][0].filename}`;
            const colorId = req.body.colorId;
            const productId = req.body.productId;
            let product = await db.Product.findOne({
                where: {
                    id: productId,
                },
            });
            let color = await db.Color.findOne({
                where: {
                    id: colorId,
                },
            });
            if (product && color) {
                let Prd_Col = await product.addColors(color, {
                    through: {
                        image1: image1,
                        image2: image2,
                        image3: image3,
                        image4: image4,
                    },
                });
                if (Prd_Col[0]) {
                    res.redirect("/Admin/PrdCol");
                } else {
                    res.json({
                        Data: Prd_Col,
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
            const prdColOld = await db.Prd_Col.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (prdColOld) {
                if (
                    await checkFileExists(
                        path.join(__dirname, `../../public${prdColOld.dataValues.image1}`)
                    )
                ) {
                    await fs.promises.unlink(
                        path.join(__dirname, `../../public${prdColOld.dataValues.image1}`)
                    );
                }
                if (
                    await checkFileExists(
                        path.join(__dirname, `../../public${prdColOld.dataValues.image2}`)
                    )
                ) {
                    await fs.promises.unlink(
                        path.join(__dirname, `../../public${prdColOld.dataValues.image2}`)
                    );
                }
                if (
                    await checkFileExists(
                        path.join(__dirname, `../../public${prdColOld.dataValues.image3}`)
                    )
                ) {
                    await fs.promises.unlink(
                        path.join(__dirname, `../../public${prdColOld.dataValues.image3}`)
                    );
                }
                if (
                    await checkFileExists(
                        path.join(__dirname, `../../public${prdColOld.dataValues.image4}`)
                    )
                ) {
                    await fs.promises.unlink(
                        path.join(__dirname, `../../public${prdColOld.dataValues.image4}`)
                    );
                }
                //console.log(req.files["file-input1"][0].filename);
                const image1 = `/Image/${req.files["file-input1"][0].filename}`;
                const image2 = `/Image/${req.files["file-input2"][0].filename}`;
                const image3 = `/Image/${req.files["file-input3"][0].filename}`;
                const image4 = `/Image/${req.files["file-input4"][0].filename}`;
                let prd_ColUpdate = await db.Prd_Col.update({
                    image1: image1,
                    image2: image2,
                    image3: image3,
                    image4: image4,
                }, {
                    where: {
                        id: req.params.id,
                    },
                });
                if (prd_ColUpdate[0]) {
                    res.redirect(`/Admin/PrdCol/${req.params.id}`);
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
            const prdColOld = await db.Prd_Col.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (prdColOld) {
                const prdColDelete = await db.Prd_Col.destroy({
                    where: {
                        id: req.params.id,
                    },
                });
                if (prdColDelete) {
                    res.redirect("/Admin/PrdCol");
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