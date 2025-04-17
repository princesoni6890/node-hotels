const express = require('express')
const app = express();

const db = require('./db');
require('dotenv').config();
const person = require('./modelss/person');




const bodyparser = require('body-parser');
app.use(bodyparser.json());
const PORT = process.env.PORT || 3000;



app.get('/', async (req, res) =>{
    res.send('welcome to my hotel....how i can help you? iam prince')
});



const personRoutes = require('./routes/personRoutes');
const menuItemsRoutes = require('./routes/menuItemRoutes');
app.use('/person', personRoutes);
app.use('/menu', menuItemsRoutes);



app.listen(3000, ()=>{
    console.log('listening on port');

});

// POST route for MenuItem

