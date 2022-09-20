const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const mysql_db_connection = require('./database/mysql/check_mysql_connection')

dotEnv.config();

const app = express();

//DB connectivity
mysql_db_connection()


// Request payload middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// cors
app.use(cors);

app.get('/', (req, res, next) => {
    res.send('Hello from Node Server');
})

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
