const db = require("../models/index");
module.exports = {
    get: async(req, res) => {
        try {
            const id = req.body?.id || req.params?.id;
            let product;
            if (id) {
                product = await db.Product.findAll({
                    where: { id: id },
                    include: [
                        db.Color,
                        db.Option,
                        db.Category,
                        db.Parameter,
                        db.Discount,
                    ],
                });
            } else {
                product = await db.Product.findAll({
                    include: [
                        db.Color,
                        db.Option,
                        db.Category,
                        db.Parameter,
                        db.Discount,
                    ],
                });
            }
            //console.log(product);
            if (product.length > 0) {
                const Detail = product.map((p) => {
                    return {
                        Product: {
                            id: p.dataValues.id,
                            title: p.dataValues.title,
                            price: p.dataValues.price,
                            description: p.dataValues.description,
                            image: p.dataValues.image,
                            stock: p.dataValues.stock,
                            createdAt: p.dataValues.createdAt,
                            updatedAt: p.dataValues.updatedAt,
                        },
                        Parameter: p.dataValues.Parameter,
                        Category: p.dataValues.Categorie,
                        Discount: p.dataValues.Discount,

                        Color: p.dataValues.Colors.map((color) => {
                            return color.dataValues;
                        }),
                        Option: p.dataValues.Options.map((option) => {
                            return option.dataValues;
                        }),
                    };
                });
                res.json({
                    Data: Detail,
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
	
	getByCategoryId : async(req, res)=>{
		try {
			const categoryId = req.body?.categoryId || req.params?.categoryId;
			if (categoryId) {
				product = await db.Product.findAll({
					attributes: ['id','title', 'categoryId'],
					where:{
						categoryId : categoryId,
					}
				});
				res.json({
                    Data: product,
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
            //const id = req.body?.id || req.params?.id,
            const productObj = {
                title: req.body?.title || req.params?.title,
                price: req.body?.price || req.params?.price,
                description: req.body?.description || req.params?.description,
                image: req.body?.image || req.params?.image,
                stock: req.body?.stock || req.params?.stock,
                parameterId: req.body?.parameterId || req.params?.parameterId,
                categoryId: req.body?.categoryId || req.params?.categoryId,
                discountId: req.body?.discountId || req.params?.discountId,
            };
            const optionId = req.body?.optionId || req.params?.optionId;
            const colorId = req.body?.colorId || req.params?.colorId;
            const product = await db.Product.create(productObj);
            await product.addOptions(
                await db.Option.findOne({
                    where: {
                        id: optionId,
                    },
                }), {
                    through: { price: req.body?.priceOption || req.params?.priceOption },
                }
            );
            await product.addColors(
                await db.Color.findOne({
                    where: {
                        id: colorId,
                    },
                }), {
                    through: {
                        image1: req.body?.imgColor1 || req.params?.imgColor1,
                        image2: req.body?.imgColor2 || req.params?.imgColor2,
                        image3: req.body?.imgColor3 || req.params?.imgColor3,
                        image4: req.body?.imgColor4 || req.params?.imgColor4,
                    },
                }
            );
            res.json({
                Data: product,
                ErrorCode: 0,
                Message: "Thành công",
            });
        } catch (err) {
            console.log(err);
            res.json({
                Data: err,
                ErrorCode: 99,
                Message: "Lỗi trong quá trình xử lý ",
            });
        }
    },
    put: async(req, res) => {
        try {} catch (err) {
            res.json({
                Data: err,
                ErrorCode: 99,
                Message: "Lỗi trong quá trình xử lý ",
            });
        }
    },
    delete: async(req, res) => {
        try {} catch (err) {
            res.json({
                Data: err,
                ErrorCode: 99,
                Message: "Lỗi trong quá trình xử lý ",
            });
        }
    },
};