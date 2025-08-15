const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {unless} = require('express-unless');
const router = require('./routes')
const {authenticateRoutes} = require("./config/unlessRoute");
const { authenticate } = require('./middlewares/authMiddleware');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Health check (put this first)
app.get('/', (req, res) => {
  res.send('Bug and Feature Tracking System API is running');
});

// Routes FIRST
app.use(router)

// Then apply authentication middleware with unless
authenticate.unless = unless;
app.use(authenticate.unless(authenticateRoutes))

module.exports = app;