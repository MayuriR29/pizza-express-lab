const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser());
const PORT = 3000;
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
app.get("/pizzas", (req, res) => {
  res.send(pizzas);
});
app.get("/pizzas/:id", (req, res) => {
  const reqPizza = pizzas.find(pizza => pizza.id === req.params.id);
  res.send(reqPizza);
});
//post
app.post("/pizzas", (req, res) => {
  pizzas = [...pizzas, req.body];
  res.send(pizzas);
});
//put
app.put("/pizzas/:id", (req, res) => {
  const pizzaToUpdate = pizzas.find(pizza => pizza.id === req.params.id);
  const updatedPizza = { ...pizzaToUpdate, ...req.body };
  const notUpdatedPizza = pizzas.filter(pizza => pizza.id !== req.params.id);
  pizzas = [...notUpdatedPizza, updatedPizza];

  res.send(pizzas);
});
//delete
app.delete("/pizzas/:id", (req, res) => {
  
  pizzas = pizzas.filter(pizza => pizza.id !== req.params.id);
  res.send(pizzas);
});

app.listen(PORT, () => {
  console.log(`your app has started ${PORT}`);
});
