const express = require('express');
const router = express.Router();
const Distributor = require('../models/Distributor');

// Get all distributors
router.get('/', async (req, res) => {
  try {
    const distributors = await Distributor.find();
    res.json(distributors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add new distributor
router.post('/', async (req, res) => {
  const { name, contact } = req.body;

  try {
    const newDistributor = new Distributor({
      name,
      contact,
    });

    const distributor = await newDistributor.save();
    res.json(distributor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;