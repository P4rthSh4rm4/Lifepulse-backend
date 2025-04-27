const mongoose = require('mongoose');

const SosSchema = new mongoose.Schema({
  username: { type: String, required: true },
  problem: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sos', SosSchema);