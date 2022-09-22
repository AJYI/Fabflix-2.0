const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const sequelize_db_connection = require('./database/sequelize/test_connection')

dotEnv.config();
const app = express();

//DB connectivity
sequelize_db_connection()

// Request payload middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Default screen
app.get('/', (req, res, next) => {
    res.send('Welcome to, Fabflix 2.0 Backend');
});

// Modularized api routers
app.use('/api/movie-router', require('./api/movies/movie_router'))
app.use('/api/stars-router', require('./api/stars/stars_router'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

// Global error handle middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    })
  })
