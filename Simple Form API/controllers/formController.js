const Form = require("../models/formModel");

// Create Form
const createForm = async (req, res) => {
  try {
    const { name, email } = req.body;

    const form = await Form.create({ name, email });

    res.status(201).json({
      success: true,
      data: form
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Get All Forms
const getForms = async (req, res) => {
  try {
    const forms = await Form.find();

    res.status(200).json({
      success: true,
      count: forms.length,
      data: forms
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createForm,
  getForms
};
