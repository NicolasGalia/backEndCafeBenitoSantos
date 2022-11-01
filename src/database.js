import mongoose from "mongoose";

// const url = 'mongodb://localhost:27017/cafe-benito-santos' local 
const url = 'mongodb+srv://nicolasgaliam:nico12345@cluster0.7hzvgkb.mongodb.net/cafebenitosantos'

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('BD conectada')
})