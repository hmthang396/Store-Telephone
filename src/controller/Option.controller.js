const db = require("../models/index");

module.exports = {
    get: async(req, res) => {
        try {
			const id = req.body?.id || req.params?.id;
			let options;
			if(id){
				options = await db.Option.findAll({
					where:{
						id:id
					}
				});
			}else{
				options = await db.Option.findAll();
			}
			if(options.length > 0 ){
				res.json({
                    Data: options,
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
			const description = req.body?.description || req.params?.description;
			const option = await db.Option.create({
				title : title,
				description : description
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
			const description = req.body?.description || req.params?.description;
			const option = await db.Option.update({
				title:title,
				description:description,
			},{
				where:{
					id:id,
				}
			});
			if(option[0]){
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
    delete: async(req, res) => {
        try {
			const id = req.body?.id || req.params?.id;
			const option = await db.Option.destroy({
				where :{
					id:id,
				}
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
};