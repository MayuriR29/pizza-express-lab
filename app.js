const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let pizzas = [
  {
    id: "1",
    name: "veggie pizza",
    price: 10
  },
  {
    id: "2",
    name: "chicken pizza",
    price: 15
  },
  {
    id: "3",
    name: "spinach pizza",
    price: 25
  }
];
app.get("/", (req, res) => {
  res.json("Hello");
});
app.get("/pizzas", (req, res) => {
  res.json(pizzas);
});
app.get("/pizzas/:id", (req, res) => {
  const reqPizza = pizzas.find(pizza => pizza.id === req.params.id);
  res.json(reqPizza);
});
//post
app.post("/pizzas", (req, res) => {
  const newPizza = {
    ...req.body
  }
  pizzas = [...pizzas, newPizza];
  res.json(newPizza);
});
//put
app.put("/pizzas/:id", (req, res) => {
  const pizzaToUpdate = pizzas.find(pizza => pizza.id === req.params.id);
  const updatedPizza = { ...pizzaToUpdate, ...req.body };
  const notUpdatedPizza = pizzas.filter(pizza => pizza.id !== req.params.id);
  pizzas = [...notUpdatedPizza, updatedPizza];

  res.json(updatedPizza);
});
//delete
app.delete("/pizzas/:id", (req, res) => {
  pizzas = pizzas.filter(pizza => pizza.id !== req.params.id);
  res.json("Pizza is deleted");
});
module.exports = app;
