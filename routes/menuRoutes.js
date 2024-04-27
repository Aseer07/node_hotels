const express = require("express");
const router = express.Router();
const {
  createMenuItem,
  getAllItems,
  getItemById,
  updateMenuItemById,
  deleteMenuItemById,
} = require("../controller/menuItem");

router
  .post("/", createMenuItem)
  .get("/", getAllItems)
  .get("/:_id", getItemById)
  .put("/:id", updateMenuItemById)
  .delete("/:id", deleteMenuItemById);

module.exports = router;
