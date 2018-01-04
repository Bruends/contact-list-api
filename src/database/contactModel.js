const mongoose = require('mongoose');
const { isEmail } = require('validator');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: String,
  email: {
    type: String,
    validate: [isEmail, 'Please use a valid email']
  },
  twitter: String,
  facebook: String,
  photo: String
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
