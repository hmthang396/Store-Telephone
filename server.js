const path = require("path");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const Models = require("./src/models");
// Router API
const Category = require("./src/routes/Category.route");
const Option = require("./src/routes/Option.route");
const Color = require("./src/routes/Color.route");
const Product = require("./src/routes/Product.route");
const Parameter = require("./src/routes/Parameter.route");
const Discount = require("./src/routes/Discount.route");
// Routes Admin
const ProductAdmin = require("./src/routes/Admin/Product.route");
// Connect to Database
(async() => {
    try {
        await Models.sequelize.sync();
    } catch (error) {
        console.error(error);
    }
})();
// Configuration Server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: "somesecret",
        cookie: {},
    })
);
// Config template view
const viewPath = path.join(__dirname, "./src/views");
app.set("views", viewPath);
app.set("view engine", "ejs");
const publicDirectoryPath = path.join(__dirname, "./src/public");
console.log(publicDirectoryPath);
app.use(express.static(publicDirectoryPath));
app.use("/Admin", express.static(publicDirectoryPath));
// Config URL-Router
app.get("/Test/:id", async(req, res) => {
    console.log(req.params.id);
    console.log(req.body.id);
    res.json({ data: [] });
});

app.use("/Category", Category);
app.use("/Option", Option);
app.use("/Color", Color);
app.use("/Parameter", Parameter);
app.use("/Product", Product);
app.use("/Discount", Discount);
app.use("/Admin", ProductAdmin);
app.use(function(req, res, next) {
    next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send("error");
});
// Config PORT
app.listen(4000, function(err) {
    if (!err) console.log("Server is up on port 4000.");
    else console.log(err);
});