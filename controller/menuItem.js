const menuItem = require("../model/menuItem");

const createMenuItem = async (req, res) => {
  try {
    const data = req.body;
    const newItem = new menuItem(data);
    const response = await newItem.save();
    console.log("new item saved", response);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllItems = async (req, res) => {
  try {
    let item = await menuItem.find({});
    console.log("item fetched successfully");
    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getItemById = async (req, res) => {
  try {
    const foundItemById = req.params._id;
    const singleItem = await menuItem.findById({ _id: foundItemById });
    console.log("got single item");
    res.status(200).json(singleItem);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateMenuItemById = async (req, res) => {
  try {
    const menuItemId = req.params.id;
    const updateMenuItemData = req.body;
    const response = await menuItem.findByIdAndUpdate(
      menuItemId,
      updateMenuItemData,
      { new: true, runValidators: true }
    );
    if (!response) {
      res.status(404).json({ error: "Person not found" });
    }
    console.log("Data updated successfully:", response);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error updating person by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteMenuItemById = async (req, res) => {
  try {
    const menuItemId = req.params.id;
    const response = await menuItem.findByIdAndDelete(menuItemId);
    if (!response) {
      res.status(404).json({ error: "Person not found" });
    }
    console.log("Person deleted successfully");
    res.status(200).json({ message: "Person deleted successfully" });
  } catch (error) {
    console.error("Error deleting person by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createMenuItem,
  getAllItems,
  getItemById,
  updateMenuItemById,
  deleteMenuItemById,
};
