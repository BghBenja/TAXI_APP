const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uir = 'mongodb+srv://testUser:<password>.jnwledv.mongodb.net/?retryWrites=true&w=majority'

async function connect() {
    try {
        await mongoose.set('strictQuery', true);
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error);
    }
}

connect();

app.listen(8000, () => {
    console.log("Server start on port 8000");
});
