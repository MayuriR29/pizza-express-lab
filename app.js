const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const indexRouter = require("./routes/indexRouter.js");
app.use("/", indexRouter);
const pizzaRouter = require("./routes/pizzaRouter");
app.use("/pizzas", pizzaRouter);
module.exports = app;
   