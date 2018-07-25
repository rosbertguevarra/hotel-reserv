const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router()
const app = express()

const PORT = 3000






app.listen(PORT,()=>{
    console.log(`SERVER STARTED AT http://localhost:${PORT}`)
})