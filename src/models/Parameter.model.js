const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Parameter = sequelize.define("Parameter", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        title: DataTypes.STRING,

        // Product Infomation
        material: DataTypes.STRING, // vật liệu
        dimension: DataTypes.STRING, // kích thước
        weight: DataTypes.STRING, // trọng lượng
        ip: DataTypes.STRING, // Chuẩn kháng nước / Bụi bẩn
        brand: DataTypes.STRING, // Nhãn hiệu
        origin: DataTypes.STRING, // xuất xứ
        release_time: DataTypes.STRING, // thời gian phát hành
        warranty_period: DataTypes.STRING, // thời gian bảo hành

        // CPU & GPU
        processor: DataTypes.STRING, // CPU
        operating_system: DataTypes.STRING, // Hệ điều hành
        detail_processor: DataTypes.STRING, // chi tiết CPU
        graphic: DataTypes.STRING, // GPU

        // RAM & Storage
        ram: DataTypes.STRING, // RAM
        internal_storage: DataTypes.STRING, // bộ nhớ trong
        external_storage: DataTypes.STRING, // bộ nhớ ngoài

        // Monitor
        size: DataTypes.STRING, // Kích thước màn hình
        technology: DataTypes.STRING, // Công nghệ màn hình
        type: DataTypes.STRING, // chuẩn màn hình
        resolution: DataTypes.STRING, // độ phân giải
        frequency: DataTypes.STRING, // Tần số quét
        glass: DataTypes.STRING, // chất liệu kính

        // Selfie Camera
        s_resolution: DataTypes.STRING,
        s_video: DataTypes.TEXT,
        s_flash: DataTypes.STRING,
        s_feature: DataTypes.TEXT,

        // Rear Camera
        r_resolution: DataTypes.STRING,
        r_video: DataTypes.TEXT,
        r_flash: DataTypes.STRING,
        r_feature: DataTypes.TEXT,

        // Connectivity
        sim_number: DataTypes.INTEGER,
        type_sim: DataTypes.STRING,
        bluetooth: DataTypes.STRING,
        wifi: DataTypes.STRING,
        gps: DataTypes.TEXT, // GPS
        data_connectivity: DataTypes.TEXT, // Kết nối mạng
        charger_connector: DataTypes.STRING, // Cổng kết nối/sạc
        audio_connector: DataTypes.STRING, // Jack tai nghe
        other_connector: DataTypes.TEXT, // Kết nối khác

        // PIN
        p_type: DataTypes.STRING,
        p_capacity: DataTypes.STRING,
        p_other: DataTypes.TEXT,
    });
    return Parameter;
};