const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('./config/dbConn');
const express = require('express');
const app=require('./app');
const note=require('./models/note');



connectDB();
mongoose.connection.once('open',()=>{
    console.log('Mongoose connected to db');
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    });
});