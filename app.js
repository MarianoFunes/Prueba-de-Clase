const express = require('express'); 

const app =express();
const path = require('path'); 


/*app.set('view engine', 'ejs'); */
app.use(express.static(path.join(__dirname, 'public')));

const rutaIndex = require('./routes/indexRoutes.js'); 

app.use('/', rutaIndex); 

app.listen(3002, ()=> {
    console.log('esta escuchando'); 
}); 