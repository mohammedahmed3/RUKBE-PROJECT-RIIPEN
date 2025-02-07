const express = require('express');
const router = express.Router();
const Material = require('../models/Material');

// Get all materials
router.get('/', async (req, res) => {
  try {
    const materials = await Material.find();
    res.json(materials);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add new material
router.post('/', async (req, res) => {
  const { name, price, distributor } = req.body;

  try {
    const newMaterial = new Material({
      name,
      price,
      distributor,
    });

    const material = await newMaterial.save();
    res.json(material);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;