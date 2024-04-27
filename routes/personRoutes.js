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

module.exports = router;
