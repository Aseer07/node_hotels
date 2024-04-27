const express = require("express");
const router = express.Router();
const {
  createPerson,
  getAllPersons,
  getPersonsByWorkType,
  updatePersonById,
  deletePersonById,
} = require("../controller/person");

router
  .post("/", createPerson)
  .get("/", getAllPersons)
  .get("/:workType", getPersonsByWorkType)
  .put("/:id", updatePersonById)
  .delete("/:id", deletePersonById);

// router.post("/", createPerson);
// router.get("/", getAllPersons);
// router.get("/:workType", getPersonsByWorkType);
// router.put("/:id", updatePersonById);
// router.delete("/:id", deletePersonById);

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Person = require("../model/Person");

// router.post("/", async (req, res) => {
//   try {
//     let data = req.body;
//     const newPerson = new Person(data);
//     const response = await newPerson.save();
//     console.log("data saved", response);
//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     let data = await Person.find({});
//     console.log("data fetched");
//     res.status(200).json(data);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// router.get("/:workType", async (req, res) => {
//   try {
//     const workType = req.params.workType;
//     console.log(workType);
//     if (
//       workType === "chef" ||
//       workType === "manager" ||
//       workType === "waiter"
//     ) {
//       const response = await Person.find({ work: workType });
//       console.log("response fetched");
//       res.status(200).json(response);
//     } else {
//       res.status(404).json({ error: "Invalid work type" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// router.put("/:id", async (req, res) => {
//   try {
//     const personId = req.params.id;
//     const updatePersonData = req.body;

//     const response = await Person.findByIdAndUpdate(
//       personId,
//       updatePersonData,
//       {
//         new: true, //return update document
//         runValidators: true, //Run mongoose validation
//       }
//     );
//     if (!response) {
//       res.status(404).json({ error: "Person not found" });
//     }
//     console.log("data updated successfully");
//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     const personId = req.params.id;
//     const response = await Person.findByIdAndDelete(personId);
//     if (!response) {
//       res.status(404).json({ error: "Person not found" });
//     }
//     console.log("person deleted successfully");
//     res.status(200).json({ message: "person deleted successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// module.exports = router;
