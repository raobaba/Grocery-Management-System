const express = require("express");
const groceryRouter = express.Router();
const {
  createGrocery,
  getAllGroceries,
  getGroceryById,
  updateGrocery,
  deleteGrocery,
} = require("../controllers/grocery.controller.js");

groceryRouter.post("/create", createGrocery);
groceryRouter.get("/getAll", getAllGroceries);
groceryRouter.get("/getById/:id", getGroceryById);
groceryRouter.put("/update/:id", updateGrocery);
groceryRouter.delete("/delete/:id", deleteGrocery);

module.exports = groceryRouter;
