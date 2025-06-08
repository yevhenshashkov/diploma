const express = require('express');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/auth');
const searchRoutes = require('./routes/search');
const hotelsRoutes = require('./routes/hotels');
const destinationsRoutes = require('./routes/destinations');
const registerRoutes = require('./routes/register');

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/search', searchRoutes);
app.use('/hotels', hotelsRoutes);
app.use('/destinations', destinationsRoutes);
app.use('/register', registerRoutes);

module.exports = app;
