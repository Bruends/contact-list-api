const defaultContactModel = require('../models/contact');

// funções CRUD
// recebe o model por parametro para facilitar a escrita de testes
module.exports = (contactModel = defaultContactModel) => ({
  find: async (req, res) => {
    try {
      // separando nome
      const name = req.params.name.split('=').pop();
      const contacts = await contactModel.find({ name });
      res.status(200).send(contacts);
    } catch (error) {
      res.status(400).send({ error: 'Error on getting contacts' });
    }
  },

  all: async (req, res) => {
    try {
      const contacts = await contactModel.find();
      return res.status(200).send(contacts);
    } catch (error) {
      return res.status(400).send({ error: 'Error on getting contacts' });
    }
  },

  save: async (req, res) => {
    try {
      const contact = req.body;
      await contactModel.create(contact);
      return res.status(200).send({ ok: true });
    } catch (error) {
      return res.status(400).send({ error: 'Error on saving contact' });
    }
  },

  update: async (req, res) => {
    try {
      const contact = req.body;

      await contactModel
        .findOne({ _id: contact.id })
        .update(contact);

      return res.status(200).send({ ok: true });
    } catch (error) {
      return res.status(400).send({ error: 'Error on updating contact' });
    }
  },

  del: async (req, res) => {
    try {
      // separando id
      const id = req.params.id.split('=').pop();
      await contactModel.findOne({ _id: id }).remove();
      res.status(200).send({ ok: true });
    } catch (error) {
      res.status(400).send({ error: 'Error on deleting contact' });
    }
  },
});
