const Models = require("./src/models");
const db = require("./src/models/index");

(async() => {
    try {
        await Models.sequelize.sync();
        let category1 = await db.Category.create({ title: "Iphone" });
        let category2 = await db.Category.create({ title: "Samsung" });
        let category3 = await db.Category.create({ title: "Oppo" });
        let category4 = await db.Category.create({ title: "Xiaomi" });
        let category5 = await db.Category.create({ title: "Nokia" });
        let category6 = await db.Category.create({ title: "Vivo" });
        //await Import();
    } catch (error) {
        console.error(error);
    }
})();

const Import = async() => {
    try {
        // Create
        let category1 = await db.Category.create({ title: "Iphone" });
        let category2 = await db.Category.create({ title: "Samsung" });
        let color1 = await db.Color.create({
            title: "Blue",
            hex: "#0000cc",
        });
        let color2 = await db.Color.create({
            title: "Black",
            hex: "#ffffff",
        });
        let option1 = await db.Option.create({
            title: "128GB",
            description: "Memory 128 Gbs",
        });
        let option2 = await db.Option.create({
            title: "256GB",
            description: "Memory 256 Gbs",
        });
        let option3 = await db.Option.create({
            title: "512GB",
            description: "Memory 512 Gbs",
        });
        let option4 = await db.Option.create({
            title: "1TB",
            description: "Memory 1 Tbs",
        });
        let parameter = await db.Parameter.create({
            title: "Chi tiết thông số kỹ thuật iPhone 13 Pro Max",
            material: "Mặt lưng máy: Kính mờ - Viền máy: Thép",
            dimension: "78.1 x 7.4 x 160.8 mm",
            weight: "228 g",
            ip: "IP68",
            brand: "Apple",
            origin: "Trung Quốc",
            release_time: "09/2021",
            warranty_period: "12 tháng",

            processor: "Apple A15 Bionic",
            operating_system: "iOS 15",
            detail_processor: "6 - 3.22 GHz",
            graphic: "Apple GPU 5 nhân",

            ram: "6 GB",
            internal_storage: "128 GB",
            external_storage: "Không",

            size: "6.7 inch",
            technology: "OLED",
            type: "Super Retina XDR",
            resolution: "2778 x 1284 Pixels",
            frequency: "120 Hz",
            glass: "Phủ Ceramic",

            s_resolution: "12.0 MP",
            s_video: "Quay phim 4K",
            s_flash: "",
            s_feature: "Chụp góc rộng (Wide) - HDR - Nhận diện khuôn mặt - Tự động lấy nét (AF) - Xoá phông",

            r_resolution: "12.0 MP - 12.0 MP - 12.0 MP",
            r_video: "Quay phim 4K",
            r_flash: "",
            r_feature: "A.I Camera - Ban đêm (Night Mode)",

            sim_number: 1,
            type_sim: "1 eSIM, 1 Nano SIM",
            bluetooth: "v5.0",
            wifi: "802.11 ax",
            gps: "A-GPS - GALILEO - GLONASS - QZSS",
            data_connectivity: "4G - 5G",
            charger_connector: "Lightning",
            audio_connector: "Lightning",
            other_connector: "Computer sync  - NFC - OTG - Radio FM",

            p_type: "Lithium-ion",
            p_capacity: "4352 mAh",
            p_other: "",
        });
        let discount1 = await db.Discount.create({
            title: "Giảm giá tới 10 triệu đồng từ ngày 13/07/2022 tới ngày 23/07/2022",
            discount: "10000000",
            status: true,
            startedAt: 1657645200000,
            endedAt: 1658550000000,
        });
        let discount2 = await db.Discount.create({
            title: "Giảm giá 9% từ ngày 13/07/2022 tới ngày 23/07/2022",
            discount: "9%",
            status: true,
            startedAt: 1657645200000,
            endedAt: 1658550000000,
        });
        let product = await db.Product.create({
            title: "Iphone 13 Pro Max",
            description: "Iphone 13 Pro Max",
            price: 23999999,
            categoryId: category1.id,
            parameterId: parameter.id,
            discountId: discount1.id,
        });
        // Add Associations
        let Prd_Col1 = await product.addColors(color1);
        let Prd_Col2 = await product.addColors(color2);
        let Prd_Option1 = await product.addOptions(option1, {
            through: { price: 23999999 },
        });
        let Prd_Option2 = await product.addOptions(option2, {
            through: { price: 25999999 },
        });
        let Prd_Option3 = await product.addOptions(option3, {
            through: { price: 27999999 },
        });
        let Prd_Option4 = await product.addOptions(option4, {
            through: { price: 29999999 },
        });
    } catch (error) {
        console.error(error);
    }
};
const Search = async() => {
    let product = await db.Product.findAll({
        include: [db.Color, db.Option],
    });
    const Detail = product.map((p) => {
        return {
            Product: p.dataValues,
            Color: p.dataValues.Colors.map((color) => {
                return color.dataValues;
            }),
            Option: p.dataValues.Options.map((option) => {
                return option.dataValues;
            }),
        };
    });
    // const Detail = {
    //     Product: product.dataValues,
    //     Color: product.dataValues.Colors.map((color) => {
    //         return color.dataValues;
    //     }),
    //     Option: product.dataValues.Options.map((option) => {
    //         return option.dataValues;
    //     }),
    // };

    // const product = await db.Product.findOne({
    //     where: { id: 1 },
    //     include: [db.Color, db.Option],
    // });
    // const Detail = {
    //     Product: product.dataValues,
    //     Color: product.dataValues.Colors.map((color) => {
    //         return color.dataValues;
    //     }),
    //     Option: product.dataValues.Options.map((option) => {
    //         return option.dataValues;
    //     }),
    // };
    console.log(Detail);
};

// async function Search() {
//     const product = await db.Product.findOne({
//         where: { id: 1 },
//         include: {
//             model: db.Option_Color,
//             attributes: ["optionId", "colorId"],
//         },
//     });
//     let OptionColors = product.Option_Colors.map(async(element) => {
//         let Opt_Col = await db.Option.findOne({
//             where: {
//                 id: element.optionId,
//             },
//             include: {
//                 model: db.Color,
//                 attributes: ["title", "hex", "id"],
//             },
//             attributes: ["title", "description", "id"],
//         });
//         return {
//             Option: Opt_Col,
//             Colors: Opt_Col.dataValues.Colors.map(async(color) => {
//                 return color.dataValues;
//             }),
//         };
//     });
//     console.log(OptionColors);
//     const DetailProduct = {
//         Product: product.dataValues,
//         Option_Color: OptionColors,
//     };
// }
// (async() => {
//     try {
//         const product = await db.Product.findOne({
//             where: { id: 1 },
//             include: {
//                 model: db.Option_Color,
//                 attributes: ["optionId", "colorId"],
//             },
//         });
//         let OptionColors = await Promise.all(
//             product.Option_Colors.map(async(element) => {
//                 let Opt_Col = await db.Option.findOne({
//                     where: {
//                         id: element.optionId,
//                     },
//                     include: {
//                         model: db.Color,
//                         attributes: ["title", "hex", "id"],
//                     },
//                     attributes: ["title", "description", "id"],
//                 });
//                 return {
//                     Option: Opt_Col.dataValues,
//                     Colors: await Promise.all(
//                         Opt_Col.dataValues.Colors.map(async(color) => {
//                             return color.dataValues;
//                         })
//                     ),
//                 };
//             })
//         );
//         const DetailProduct = {
//             Product: product.dataValues,
//             Option_Color: OptionColors,
//         };
//         console.log(
//             DetailProduct.Option_Color.map((e) => {
//                 return e.Option;
//             })
//         );
//         console.log(
//             DetailProduct.Option_Color.map((e) => {
//                 return e.Colors;
//             })
//         );
//     } catch (error) {
//         console.log(error);
//     }
// })();