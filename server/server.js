const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv')

const authRoutes = require('./controllers/auth.controller');
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json()); //allows json as input in backend

app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});

app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});