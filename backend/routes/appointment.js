// backend/routes/appointment.js
const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Route to create an appointment
router.post('/create', async (req, res) => {
  const { name, email, phone, date, time, message } = req.body;
  const newAppointment = new Appointment({ name, email, phone, date, time, message });
  await newAppointment.save();
  res.json(newAppointment);
});

// Route to get all appointments
router.get('/', async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
});

module.exports = router;
