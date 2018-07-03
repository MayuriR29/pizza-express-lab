var express = require("express");
var router = express.Router();
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

router.get("/", (req, res) => {
  res.json(pizzas);
});
router.get("/:id", (req, res) => {
  const reqPizza = pizzas.find(pizza => pizza.id === req.params.id);
  res.json(reqPizza);
});
//post
router.post("/", (req, res) => {
  const newPizza = {
    ...req.body
  };
  pizzas = [...pizzas, newPizza];
  res.json(newPizza);
});
//put
router.put("/:id", (req, res) => {
  const pizzaToUpdate = pizzas.find(pizza => pizza.id === req.params.id);
  const updatedPizza = { ...pizzaToUpdate, ...req.body };
  const notUpdatedPizza = pizzas.filter(pizza => pizza.id !== req.params.id);
  pizzas = [...notUpdatedPizza, updatedPizza];

  res.json(updatedPizza);
});
//delete
router.delete("/:id", (req, res) => {
  pizzas = pizzas.filter(pizza => pizza.id !== req.params.id);
  res.json("Pizza is deleted");
});

module.exports = router;
