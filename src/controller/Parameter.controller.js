const db = require("../models/index");
module.exports = {
    get: async(req, res) => {
        try {
			let id = req.body?.id || req.params?.id;
			let parameters ;
			if(id){
				parameters = await db.Parameter.findAll({
					where: { id: id },
				});
			}else{
				parameters = await db.Parameter.findAll();	
			}
			if(parameters.length > 0 ){
				res.json({
                    Data: parameters,
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
			const parameter = {
				title : req.body?.title || req.params?.title,
			
				 material : req.body?.material || req.params?.material,
				 dimension : req.body?.dimension || req.params?.dimension,
				 weight : req.body?.weight || req.params?.weight,
				 ip : req.body?.ip || req.params?.ip,
				 brand : req.body?.brand || req.params?.brand,
				 origin : req.body?.origin || req.params?.origin,
				 release_time : req.body?.release_time || req.params?.release_time,
				 warranty_period : req.body?.warranty_period || req.params?.warranty_period,
				
				 processor : req.body?.processor || req.params?.processor,
				 operating_system : req.body?.operating_system || req.params?.operating_system,
				 detail_processor : req.body?.detail_processor || req.params?.detail_processor,
				 graphic : req.body?.graphic || req.params?.graphic,
				
				 ram : req.body?.ram || req.params?.ram,
				 internal_storage : req.body?.internal_storage || req.params?.internal_storage,
				 external_storage : req.body?.external_storage || req.params?.external_storage,
				
				 size : req.body?.size || req.params?.size,
				 technology : req.body?.technology || req.params?.technology,
				 type : req.body?.type || req.params?.type,
				 resolution : req.body?.resolution || req.params?.resolution,
				 frequency : req.body?.frequency || req.params?.frequency,
				 glass : req.body?.glass || req.params?.glass,
				
				 s_resolution : req.body?.s_resolution || req.params?.s_resolution,
				 s_video : req.body?.s_video || req.params?.s_video,
				 s_flash : req.body?.s_flash || req.params?.s_flash,
				 s_feature : req.body?.s_feature || req.params?.s_feature,
				
				 r_resolution : req.body?.r_resolution || req.params?.r_resolution,
				 r_video : req.body?.r_video || req.params?.r_video,
				 r_flash : req.body?.r_flash || req.params?.r_flash,
				 r_feature : req.body?.r_feature || req.params?.r_feature,
				
				 sim_number : req.body?.sim_number || req.params?.sim_number,
				 type_sim : req.body?.type_sim || req.params?.type_sim,
				 bluetooth : req.body?.bluetooth || req.params?.bluetooth,
				 wifi : req.body?.wifi || req.params?.wifi,
				 gps : req.body?.gps || req.params?.gps,
				 data_connectivity : req.body?.data_connectivity || req.params?.data_connectivity,
				 charger_connector : req.body?.charger_connector || req.params?.charger_connector,
				 audio_connector : req.body?.audio_connector || req.params?.audio_connector,
				 other_connector : req.body?.other_connector || req.params?.other_connector,
				
				 p_type : req.body?.p_type || req.params?.p_type,
				 p_capacity : req.body?.p_capacity || req.params?.p_capacity,
				 p_other : req.body?.p_other || req.params?.p_other,
			}
			const parameterCreate = await db.Parameter.create(parameter);
			if(parameterCreate){
				res.json({
					Data: parameterCreate,
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
			const parameter = {
				title : req.body?.title || req.params?.title,
			
				 material : req.body?.material || req.params?.material,
				 dimension : req.body?.dimension || req.params?.dimension,
				 weight : req.body?.weight || req.params?.weight,
				 ip : req.body?.ip || req.params?.ip,
				 brand : req.body?.brand || req.params?.brand,
				 origin : req.body?.origin || req.params?.origin,
				 release_time : req.body?.release_time || req.params?.release_time,
				 warranty_period : req.body?.warranty_period || req.params?.warranty_period,
				
				 processor : req.body?.processor || req.params?.processor,
				 operating_system : req.body?.operating_system || req.params?.operating_system,
				 detail_processor : req.body?.detail_processor || req.params?.detail_processor,
				 graphic : req.body?.graphic || req.params?.graphic,
				
				 ram : req.body?.ram || req.params?.ram,
				 internal_storage : req.body?.internal_storage || req.params?.internal_storage,
				 external_storage : req.body?.external_storage || req.params?.external_storage,
				
				 size : req.body?.size || req.params?.size,
				 technology : req.body?.technology || req.params?.technology,
				 type : req.body?.type || req.params?.type,
				 resolution : req.body?.resolution || req.params?.resolution,
				 frequency : req.body?.frequency || req.params?.frequency,
				 glass : req.body?.glass || req.params?.glass,
				
				 s_resolution : req.body?.s_resolution || req.params?.s_resolution,
				 s_video : req.body?.s_video || req.params?.s_video,
				 s_flash : req.body?.s_flash || req.params?.s_flash,
				 s_feature : req.body?.s_feature || req.params?.s_feature,
				
				 r_resolution : req.body?.r_resolution || req.params?.r_resolution,
				 r_video : req.body?.r_video || req.params?.r_video,
				 r_flash : req.body?.r_flash || req.params?.r_flash,
				 r_feature : req.body?.r_feature || req.params?.r_feature,
				
				 sim_number : req.body?.sim_number || req.params?.sim_number,
				 type_sim : req.body?.type_sim || req.params?.type_sim,
				 bluetooth : req.body?.bluetooth || req.params?.bluetooth,
				 wifi : req.body?.wifi || req.params?.wifi,
				 gps : req.body?.gps || req.params?.gps,
				 data_connectivity : req.body?.data_connectivity || req.params?.data_connectivity,
				 charger_connector : req.body?.charger_connector || req.params?.charger_connector,
				 audio_connector : req.body?.audio_connector || req.params?.audio_connector,
				 other_connector : req.body?.other_connector || req.params?.other_connector,
				
				 p_type : req.body?.p_type || req.params?.p_type,
				 p_capacity : req.body?.p_capacity || req.params?.p_capacity,
				 p_other : req.body?.p_other || req.params?.p_other,
			}
			const parameterUpdate = await db.Parameter.update(parameter,{
				where:{
					id:id,
				}
			});
			if(parameterUpdate[0]){
				res.json({
					Data: parameterUpdate,
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
			const parameter = await db.Parameter.destroy({
				where :{
					id:id,
				}
			});
			if(parameter){
				res.json({
					Data: parameter,
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