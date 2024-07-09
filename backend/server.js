// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const appointmentRoutes = require('./routes/appointment');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/tourist-appointments', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(bodyParser.json());
app.use('/api/appointments', appointmentRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
