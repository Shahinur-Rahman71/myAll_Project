const express = require('express');
const app = express();
const port = process.env.port || 3000;
const cors = require('cors');
const path = require('path')
var expressLayouts = require('express-ejs-layouts');

// app.use(cors());
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
app.use(expressLayouts);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=> {
    res.render('index', { 
        title: 'javaScript',
        people: [
            {
                name: 'shanto',               
            },
            {
                name: 'atik'
            }
        ]
    })
});

app.get('/about', (req, res)=> {
    res.render('about', {});
})


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})