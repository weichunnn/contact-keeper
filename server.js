const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './config/config.env' });
const colors = require('colors');

const connectDb = require('./config/db');

const app = express();

// Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Connect with Database
connectDb();

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to ContactKeeper' });
});

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running smoothly in ${process.env.NODE_ENV} mode on port: ${PORT}`
      .yellow.bold
  )
);
