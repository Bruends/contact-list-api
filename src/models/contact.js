const mongoose = require('../config/database');
const { isEmail } = require('validator');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: String,
  cell_phone: String,
  email: {
    type: String,
    validate: [isEmail, 'Invalid Email !'],
  },
  twitter: String,
  facebook: String,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
