const Person = require("../model/Person");

const createPerson = async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("Data saved:", response);
    res.status(201).json(response); // 201 for "Created" status
  } catch (error) {
    console.error("Error creating person:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllPersons = async (req, res) => {
  try {
    const data = await Person.find({});
    console.log("Data fetched:", data);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching persons:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getPersonsByWorkType = async (req, res) => {
  try {
    const workType = req.params.workType;
    console.log("Work type:", workType);
    if (["chef", "manager", "waiter"].includes(workType)) {
      const response = await Person.find({ work: workType });
      console.log("Response fetched:", response);
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (error) {
    console.error("Error fetching persons by work type:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updatePersonById = async (req, res) => {
  try {
    const personId = req.params.id;
    const updatePersonData = req.body;
    const response = await Person.findByIdAndUpdate(
      personId,
      updatePersonData,
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

const deletePersonById = async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
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
  createPerson,
  getAllPersons,
  getPersonsByWorkType,
  updatePersonById,
  deletePersonById,
};
