const Person = require("../models/person.model");

const getAllPeople = async (req, res, next) => {
  try {
    const people = await Person.find();
    return res.json({
      error: false,
      people,
      message: "All notes retrieved successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
};
const createPerson = async (req, res, next) => {
  try {
    const data = req.body;
    const person = new Person({ ...data });
    await person.save();
    return res
      .status(200)
      .json({ error: false, person, message: "Person added successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message:error.message });
  }
};
const editPerson = async (req, res, next) => {
  try {
    const _id = req.params.personId;
    const data = req.body;
    const person = await Person.findByIdAndUpdate(_id, data, { new: true }); 
    if (!person) {
      return res.status(404).json({ error: true, message: "Person not found" });
    }
    return res.json({
      error: false,
      person,
      message: "Person updated successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
};

const deletePerson = async (req, res, next) => {
  try {
    const _id = req.params.personId;
    const deletedPerson = await Person.findByIdAndDelete(_id);
    return res.json({
      error: false,
      person: deletedPerson,
      message: "Person deleted successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
};

module.exports = {
  getAllPeople,
  createPerson,
  editPerson,
  deletePerson,
};
