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

// router.post("/", createMenuItem);
// router.get("/", getAllItems);
// router.get("/:_id", getItemById);
// router.put("/:id", updateMenuItemById);
// router.delete("/:id", deleteMenuItemById);

module.exports = router;

//const menuItem = require("../model/menuItem");
// router.post("/", async (req, res) => {
//   try {
//     const data = req.body;
//     const newItem = new menuItem(data);
//     const response = await newItem.save();
//     console.log("new item saved", response);
//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     let item = await menuItem.find({});
//     console.log("item fetched successfully");
//     res.status(200).json(item);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// router.get("//:_id", async (req, res) => {
//   try {
//     const foundItemById = req.params._id;
//     const singleItem = await menuItem.findById({ _id: foundItemById });
//     console.log("got single item");
//     res.status(200).json(singleItem);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// module.exports = router;
