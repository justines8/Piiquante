/* The `dotenv.config()` method is called to load the environment
variables from the `.env` file into the `process.env` object.*/
const dotenv = require("dotenv");
dotenv.config();

/* importing the Express.js framework and configuring it to use JSON as the data 
format for incoming requests.*/
const express = require('express');
const app = express();
app.use(express.json());

const helmet = require("helmet");

const path = require("path");

/* This code is connecting the Node.js application to a MongoDB database using the Mongoose library.*/
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://${process.env.DB_MAIL}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}${process.env.DB_TEST}`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const userRoutes = require("./routes/user");

const sauceRoutes = require("./routes/sauces");

/* This code is setting up CORS (Cross-Origin Resource Sharing) headers for the Express.js app. CORS is
a security feature implemented by web browsers that restricts web pages from making requests to a
different domain than the one that served the page.*/
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(helmet());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/auth/", userRoutes);

app.use("/api/sauces", sauceRoutes);

module.exports = app;