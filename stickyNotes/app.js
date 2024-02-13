const express=require('express');
const app=express();
const morgan=require('morgan');
app.use(express.json());
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const noteRoutes = require('./routes/noteRouter');
app.use('/', noteRoutes);

module.exports=app;