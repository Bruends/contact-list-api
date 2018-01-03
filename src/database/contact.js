const Contact = require('./contactModel');

module.exports = {
  find: name => {
    try {
      return Contact.findOne({ name: name });
    } catch (error) {
      return error;
    }
  },

  all: () => {
    try {
      return Contact.find();
    } catch (error) {
      return error;
    }
  },

  save: contact => {
    try {
      return Contact.create(contact);
    } catch (error) {
      return error;
    }
  },

  update: contact => {
    try {
      return Contact.update(contact);
    } catch (error) {
      return error;
    }
  },

  del: id => {
    try {
      return Contact.findOne({ id: id }).remove();
    } catch (error) {
      return error;
    }
  }
};
