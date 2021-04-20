const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/loginin_demo',{ useNewUrlParser: true })
    .then( () => {
        console.log('MongoDb connection established successfully');
    })
    .catch(err => {
        console.log(err)
    })