const db = require("../models/index");
module.exports = {
    get: async(req, res) => {
        try {
			const id = req.body?.id || req.params?.id;
			let colors;
			if(id){
				colors = await db.Color.findAll({
					where:{
						id:id
					}
				});
			}else{
				colors = await db.Color.findAll();
			}
			if(colors.length > 0 ){
				res.json({
                    Data: colors,
                    ErrorCode: 0,
                    Message: "Thành công",
                });
			}else{
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
			const title = req.body?.title || req.params?.title;
			const hex = req.body?.hex || req.params?.hex;
			const option = await db.Color.create({
				title : title,
				hex : hex
			});
			if(option){
				res.json({
					Data: option,
					ErrorCode: 0,
					Message: "Thành công",
				});
			}else{
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
    put: async(req, res) => {
        try {
			const id = req.body?.id || req.params?.id;
			const title = req.body?.title || req.params?.title;
			const hex = req.body?.hex || req.params?.hex;
			const colors = await db.Color.update({
				title:title,
				hex:hex,
			},{
				where:{
					id:id,
				}
			});
			if(colors[0]){
				res.json({
					Data: colors,
					ErrorCode: 0,
					Message: "Thành công",
				});
			}else{
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
    delete: async(req, res) => {
        try {
			const id = req.body?.id || req.params?.id;
			const colors = await db.Color.destroy({
				where :{
					id:id,
				}
			});
			if(colors){
				res.json({
					Data: colors,
					ErrorCode: 0,
					Message: "Thành công",
				});
			}else{
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