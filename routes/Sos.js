const express = require('express');
const router = express.Router();
const Sos = require('../models/Sos');

// POST - Create new SOS
router.post('/', async (req, res) => {
  const { username, problem, location } = req.body;

  try {
    const newSos = new Sos({
      username,
      problem,
      location
    });

    await newSos.save();
    res.status(201).json({ message: 'SOS Sent Successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET - Get all SOS
router.get('/', async (req, res) => {
  try {
    const sosList = await Sos.find().sort({ time: -1 });
    res.status(200).json(sosList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
