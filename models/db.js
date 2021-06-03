const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/EmnployeeDB',{ useNewUrlParser: true}, (err) =>{
    if(!err) { console.log('mongoDB connecctefd very successfullyy')    }
})

require('./employee.model')