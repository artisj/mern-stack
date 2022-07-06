const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db');
const {readdirSync} = require('node:fs') 
const cors = require('cors')



const morgan = require('morgan')

const port = process.env.PORT;

connectDB();

const app = express();

app.use(morgan('dev'))

app.use(cors({
    origin: "*",
    methods: ['GET','POST','DELETE','PUT']
}))

// allows access to req.body
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// autoload routes from routes folder
//readdirSync('./backend/routes').map((r) => app.use('/api', require(`./routes/${r}`)))

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});