const request = require("supertest");
const app = require("./app");
test("Test GET / from pizza", async () => {
  const response = await request(app).get("/");
  expect(response.status).toEqual(200);
  expect(response.body).toEqual("Hello");
});

test("Test GET / from pizza", async () => {
  const response = await request(app).get("/pizzas");
  expect(response.status).toEqual(200);
  expect(Array.isArray(response.body)).toEqual(true);
});

test("Test GET /:id from pizza,to return pizza by id ", async () => {
  const response = await request(app).get("/pizzas/1");
  const TESTDATA = {
    id: "1",
    name: "veggie pizza",
    price: 10
  };
  expect(response.status).toEqual(200);
  expect(response.body).toEqual(TESTDATA);
});

test("Test POST / pizza,to return new array of pizza ", async () => {
  const TESTDATA = {
    id: "1",
    name: "veggie pizza",
    price: 10
  };
  const response = await request(app)
    .post("/pizzas")
    .send(TESTDATA);
  console.log("test", response.body);
  expect(response.status).toEqual(200);
  expect(response.body).toMatchObject(TESTDATA);
});

test("TEST PUT pizza to return updated pizza", async () => {
  const TESTDATA = {
    id: "1",
    name: "very veggie pizza"
  };
  const response = await request(app)
    .put("/pizzas/1")
    .send(TESTDATA);
  expect(response.status).toEqual(200);
  expect(response.body).toMatchObject(TESTDATA);
});
test("TEST DELETE pizza to return updated array", async () => {
    const response=await request(app).delete("/pizzas/2");
    expect(response.status).toEqual(200);
    expect(response.body).toEqual("Pizza is deleted");
});
