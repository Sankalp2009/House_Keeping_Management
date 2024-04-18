// models/Appointment.js
const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now, required: true },
  time: { type: String, default: () => new Date().toLocaleTimeString(), required: true },
  customerName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  serviceType: { type: String, required: true },
  Image: { type: String},
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
