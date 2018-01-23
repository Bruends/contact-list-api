const express = require('express');

const router = express.Router();

const contactController = require('../controllers/contact')();

router.get('/contact/:name', async (req, res) => {
  await contactController.find(req, res);
});

router.get('/contact', async (req, res) => {
  await contactController.all(req, res);
});

router.post('/contact', async (req, res) => {
  await contactController.save(req, res);
});

router.put('/contact', async (req, res) => {
  await contactController.update(req, res);
});

router.delete('/contact/:id', async (req, res) => {
  await contactController.del(req, res);
});

module.exports = router;
