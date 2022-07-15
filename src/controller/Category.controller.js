const db = require("../models/index");

module.exports = {
    get: async(req, res) => {
        try {
            const category = await db.Category.findAll();
            if (category.length > 0) {
                res.json({
                    Data: category,
                    ErrorCode: 0,
                    Message: "Thành công",
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
			const title = req.body?.title || req.params?.title;
			const category = await db.Category.create({
				title:title,
			});
			if(category){
				res.json({
					Data: category,
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
			const category = await db.Category.update({
				title:title,
			},{
				where:{
					id:id,
				}
			});
			if(category[0]){
				res.json({
					Data: category,
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
			const category = await db.Category.destroy({
				where :{
					id:id,
				}
			});
			if(category){
				res.json({
					Data: category,
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