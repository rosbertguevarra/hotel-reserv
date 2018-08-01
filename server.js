const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router()
const app = express()
const users = require('./routes/user')
const rooms = require('./routes/rooms')


const PORT = 3000


//USE ROUTES
app.use('/api/users', users);
app.use('/api/rooms', rooms);


app.listen(PORT,()=>{
    console.log(`SERVER STARTED AT http://localhost:${PORT}`)
})