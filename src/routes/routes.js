const express = require('express');
const router = express.Router();

const contactsDB = require('../database/contact');

router.get('/contact/:name', async (req, res) => {
  // separando nome
  const name = req.params.name.split('=').pop();
  res.json(await contactsDB.find(name));
});

router.get('/contact', async (req, res) => {
  res.json(await contactsDB.all());
});

router.post('/contact', async (req, res) => {
  res.json(await contactsDB.save(req.body));
});

router.put('/contact', async (req, res) => {
  res.json(await contactsDB.update(req.body));
});

router.delete('/contact/:id', async (req, res) => {
  // separando id
  const id = req.params.id.split('=').pop();
  res.json(await contactsDB.del(id));
});

module.exports = router;
