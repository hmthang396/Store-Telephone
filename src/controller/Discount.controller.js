const db = require("../models/index");
module.exports = {
    get: async(req, res) => {
        try {
			const id = req.body?.id || req.params?.id;
			let discounts;
			if(id){
				discounts = await db.Discount.findAll({
					where:{
						id:id
					}
				});
			}else{
				discounts = await db.Discount.findAll();
			}
			if(discounts.length > 0 ){
				res.json({
                    Data: discounts,
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
			const discountObj = {
				title: req.body?.title || req.params?.title,
				discount: req.body?.discount || req.params?.discount,
				status: req.body?.status || req.params?.status,
				startedAt: new Date(req.body?.startedAt || req.params?.startedAt) || new Date(),
				endedAt: new Date(req.body?.endedAt || req.params?.endedAt) || new Date(),
			};
			const discount = await db.Discount.create(discountObj);
			if(discount){
				res.json({
					Data: discount,
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
			const discountObj = {
				title: req.body?.title || req.params?.title,
				discount: req.body?.discount || req.params?.discount,
				status: req.body?.status || req.params?.status,
				startedAt: new Date(req.body?.startedAt || req.params?.startedAt) || new Date(),
				endedAt: new Date(req.body?.endedAt || req.params?.endedAt) || new Date(),
			};
			const discount = await db.Discount.update(discountObj,{
				where:{
					id:id,
				}
			});
			if(discount[0]){
				res.json({
					Data: discount,
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
			const discount = await db.Discount.destroy({
				where :{
					id:id,
				}
			});
			if(discount){
				res.json({
					Data: discount,
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