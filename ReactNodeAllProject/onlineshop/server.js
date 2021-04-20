require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const app = express();

// routes
const userRotuer  = require('./routes/userRouter');
const categoryRouter = require('./routes/categoryRouter');
const upload = require('./routes/upload');
const productRouter = require('./routes/productRouter');
const paymentRouter = require('./routes/paymentRouter');

// use middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({
    useTempFiles: true
}));


// add routes
app.use('/user',userRotuer);
app.use('/api', categoryRouter);
app.use('/api', upload);
app.use('/api', productRouter);
app.use('/api', paymentRouter);

// connect to database
const URI = process.env.MONGOBD_URL;
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
