const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB();

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__direname, '../', 'frontend', 'build', 'index.html'))
    })
}else {
    app.get('/', (req, res) => {
        res.send("You are not on production stage.")
    })
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server running at port = ${port}`.blue.underline));

