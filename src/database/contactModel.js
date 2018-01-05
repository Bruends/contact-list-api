const mongoose = require('mongoose');
const { isEmail } = require('validator');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: String,
  phone: String,
  cell_phone: String,
  email: {
    type: String,
    validate: [isEmail, 'Please use a valid email']
  },
  twitter: String,
  facebook: String
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
