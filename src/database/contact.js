const Contact = require('./contactModel');

module.exports = {
  find: name => {
    return Contact.findOne({ name: name });
  },

  all: () => {
    return Contact.find();
  },

  save: contact => {
    return Contact.create(contact);
  },

  update: contact => {
    return Contact.findOne({ _id: contact._id }).update(contact);
  },

  del: id => {
    return Contact.findOne({ _id: id }).remove();
  }
};
