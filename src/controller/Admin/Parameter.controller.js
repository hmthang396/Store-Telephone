const db = require("../../models/index");
module.exports = {
    get: async(req, res) => {
        try {
            res.render("Admin/Parameter.Form.ejs", {
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
            const parameters = await db.Parameter.findAll();
            if (parameters.length > 0) {
                res.render("Admin/Parameter.Table.ejs", {
                    Parameters: parameters,
                });
            } else {
                res.render("Admin/Parameter.Table.ejs", {
                    Parameters: [],
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
            const parameter = await db.Parameter.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (parameter) {
                res.render("Admin/Parameter.Form.ejs", {
                    Message: "Update",
                    Parameter: parameter.dataValues,
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
            const parameter = {
                title: req.body.title,

                material: req.body.material,
                dimension: req.body.dimension,
                weight: req.body.weight,
                ip: req.body.ip,
                brand: req.body.brand,
                origin: req.body.origin,
                release_time: req.body.release_time,
                warranty_period: req.body.warranty_period,

                processor: req.body.processor,
                operating_system: req.body.operating_system,
                detail_processor: req.body.detail_processor,
                graphic: req.body.graphic,

                ram: req.body.ram,
                internal_storage: req.body.internal_storage,
                external_storage: req.body.external_storage,

                size: req.body.size,
                technology: req.body.technology,
                type: req.body.type,
                resolution: req.body.resolution,
                frequency: req.body.frequency,
                glass: req.body.glass,

                s_resolution: req.body.s_resolution,
                s_video: req.body.s_video,
                s_flash: req.body.s_flash,
                s_feature: req.body.s_feature,

                r_resolution: req.body.r_resolution,
                r_video: req.body.r_video,
                r_flash: req.body.r_flash,
                r_feature: req.body.r_feature,

                sim_number: req.body.sim_number,
                type_sim: req.body.type_sim,
                bluetooth: req.body.bluetooth,
                wifi: req.body.wifi,
                gps: req.body.gps,
                data_connectivity: req.body.data_connectivity,
                charger_connector: req.body.charger_connector,
                audio_connector: req.body.audio_connector,
                other_connector: req.body.other_connector,

                p_type: req.body.p_type,
                p_capacity: req.body.p_capacity,
                p_other: req.body.p_other,
            };
            const parameterCreate = await db.Parameter.create(parameter);
            if (parameterCreate) {
                res.redirect("/Admin/Parameter");
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
            const parameterOld = await db.Parameter.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (parameterOld) {
                const parameter = {
                    title: req.body.title,

                    material: req.body.material,
                    dimension: req.body.dimension,
                    weight: req.body.weight,
                    ip: req.body.ip,
                    brand: req.body.brand,
                    origin: req.body.origin,
                    release_time: req.body.release_time,
                    warranty_period: req.body.warranty_period,

                    processor: req.body.processor,
                    operating_system: req.body.operating_system,
                    detail_processor: req.body.detail_processor,
                    graphic: req.body.graphic,

                    ram: req.body.ram,
                    internal_storage: req.body.internal_storage,
                    external_storage: req.body.external_storage,

                    size: req.body.size,
                    technology: req.body.technology,
                    type: req.body.type,
                    resolution: req.body.resolution,
                    frequency: req.body.frequency,
                    glass: req.body.glass,

                    s_resolution: req.body.s_resolution,
                    s_video: req.body.s_video,
                    s_flash: req.body.s_flash,
                    s_feature: req.body.s_feature,

                    r_resolution: req.body.r_resolution,
                    r_video: req.body.r_video,
                    r_flash: req.body.r_flash,
                    r_feature: req.body.r_feature,

                    sim_number: req.body.sim_number,
                    type_sim: req.body.type_sim,
                    bluetooth: req.body.bluetooth,
                    wifi: req.body.wifi,
                    gps: req.body.gps,
                    data_connectivity: req.body.data_connectivity,
                    charger_connector: req.body.charger_connector,
                    audio_connector: req.body.audio_connector,
                    other_connector: req.body.other_connector,

                    p_type: req.body.p_type,
                    p_capacity: req.body.p_capacity,
                    p_other: req.body.p_other,
                };
                const parameterUpdate = await db.Parameter.update(parameter, {
                    where: {
                        id: req.params.id,
                    },
                });
                if (parameterUpdate[0]) {
                    res.redirect(`/Admin/Parameter/${req.params.id}`);
                } else {
                    res.json({
                        Data: parameterUpdate,
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
            const parameterOld = await db.Parameter.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (parameterOld) {
                const parameterDelete = await db.Parameter.destroy({
                    where: {
                        id: req.params.id,
                    },
                });
                if (parameterDelete) {
                    res.redirect("/Admin/Parameter");
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