require('./models/db')

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

var employeeController = require('./controllers/employeeControllers')

var app = express();

app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());

app.set('views', path.join(__dirname,'/views/'));

app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout:'mainLayout', layoutsDir:__dirname + '/views/layouts'}));
app.set('view engine','hbs');

app.listen(800, ()=>{
    console.log('Express server runnnign at port : 800')
})

app.use('/employee', employeeController);