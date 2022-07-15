const db = require("../../models/index");
module.exports = {
    get: async(req, res) => {
        try {
            res.render("Admin/Option.Form.ejs", {
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
    getById: async(req, res) => {
        try {
            const option = await db.Option.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (option) {
                res.render("Admin/Option.Form.ejs", {
                    Message: "Update",
                    Option: option.dataValues,
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
            const option = {
                title: req.body.title,
                description: req.body.description,
            };
            const optionCreate = await db.Option.create(option);
            if (optionCreate) {
                res.redirect("/Admin/Option");
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
            const optionOld = await db.Option.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (optionOld) {
                const option = {
                    title: req.body.title,
                    description: req.body.description,
                };
                const optionUpdate = await db.Option.update(option, {
                    where: {
                        id: req.params.id,
                    },
                });
                if (optionUpdate[0]) {
                    res.redirect(`/Admin/Option/${req.params.id}`);
                } else {
                    res.json({
                        Data: optionUpdate,
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
            const optionOld = await db.Option.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (optionOld) {
                const optionDelete = await db.Option.destroy({
                    where: {
                        id: req.params.id,
                    },
                });
                if (optionDelete) {
                    res.redirect("/Admin/Option");
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