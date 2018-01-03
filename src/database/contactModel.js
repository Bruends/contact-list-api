const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {type: String, required: true},
  number: String,
  email: String,
  photo: String
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
