const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db');


const port = process.env.PORT;

connectDB();

const app = express();

// allows access to req.body
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'));
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});