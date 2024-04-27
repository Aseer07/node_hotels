const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  work: {
    type: String,
    enum: ["chef", "manager", "waiter"],
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  address: String,
  salary: {
    type: Number,
    required: true,
  },
});

const Person = mongoose.model("Person", personSchema);
module.exports = Person;
