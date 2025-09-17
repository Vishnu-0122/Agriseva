// routes/crops.js
const router = require('express').Router();
let Crop = require('../models/crop.model'); // You'll create this file next

// Endpoint to get all crops
router.route('/').get((req, res) => {
  Crop.find()
    .then(crops => res.json(crops))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Endpoint to add a new crop
router.route('/add').post((req, res) => {
  const { name, type } = req.body;
  const newCrop = new Crop({ name, type });

  newCrop.save()
    .then(() => res.json('Crop added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;