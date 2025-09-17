// models/crop.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cropSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
}, {
  timestamps: true,
});

const Crop = mongoose.model('Crop', cropSchema);
module.exports = Crop;