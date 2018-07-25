const mongoose = require('mongoose')
const {connection, Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/hotel-reserve').catch(console.error)



const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    email: String
})

const User = mongoose.model('User', UserSchema)