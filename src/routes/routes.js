const express = require('express');

const router = express.Router();

const contactsDB = require('../database/contact');

router.get('/contact/:name', async (req, res) => {
  try {
    // separando nome
    const name = req.params.name.split('=').pop();
    res.json(await contactsDB.find(name));
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.get('/contact', async (req, res) => {
  try {
    res.json(await contactsDB.all());
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.post('/contact', async (req, res) => {
  try {
    res.json(await contactsDB.save(req.body));
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.put('/contact/', async (req, res) => {
  try {
    // separando id
    res.json(await contactsDB.update(req.body));
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.delete('/contact/:id', async (req, res) => {
  try {
    // separando id
    const id = req.params.id.split('=').pop();
    res.json(await contactsDB.del(id));
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
