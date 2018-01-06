const Contact = require('./contactModel');

// funções CRUD
module.exports = {
  find: name => Contact.findOne({ name }),

  all: () => Contact.find(),

  save: contact => Contact.create(contact),

  update: contact => Contact.findOne({ _id: contact._id }).update(contact),

  del: id => Contact.findOne({ _id: id }).remove(),
};
