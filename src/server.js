require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template
configViewEngine(app);

//khai bao route
app.use("/", webRoutes);

//test connection

//simple query
connection.query("select * from Users", function (err, results, fields) {
  console.log(">>>results= ", results);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
