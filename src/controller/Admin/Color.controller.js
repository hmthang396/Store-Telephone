const db = require("../../models/index");
module.exports = {
    get: async(req, res) => {
        try {
            res.render("Admin/Color.Form.ejs", {
                Message: "Create",
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
            const colors = await db.Color.findAll();
            if (colors.length > 0) {
                res.render("Admin/Color.Table.ejs", {
                    Colors: colors,
                });
            } else {
                res.render("Admin/Color.Table.ejs", {
                    Colors: [],
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
            const color = await db.Color.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (color) {
                res.render("Admin/Color.Form.ejs", {
                    Message: "Update",
                    Color: color.dataValues,
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
            const color = {
                title: req.body.title,
                hex: req.body.hex,
            };
            const colorCreate = await db.Color.create(color);
            if (colorCreate) {
                res.redirect("/Admin/Color");
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
            const colorOld = await db.Color.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (colorOld) {
                const color = {
                    title: req.body.title,
                    hex: req.body.hex,
                };
                const colorUpdate = await db.Color.update(color, {
                    where: {
                        id: req.params.id,
                    },
                });
                if (colorUpdate[0]) {
                    res.redirect(`/Admin/Color/${req.params.id}`);
                } else {
                    res.json({
                        Data: colorUpdate,
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
            const colorOld = await db.Color.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (colorOld) {
                const colorDelete = await db.Color.destroy({
                    where: {
                        id: req.params.id,
                    },
                });
                if (colorDelete) {
                    res.redirect("/Admin/Color");
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