//advance-table.html - Vista - views
//modal.html - Referencia - views
//404.html - Vista - views
//inmput.html - Referencia - views
//index.html - vistas - views

//assets - public

const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const cors = require('cors')
const puerto = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'hbs'); //vistas dinamicas
hbs.registerPartials(__dirname + '/views/partials',()=>{});

//Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors());

//Rutas - temporales
app.get("/",(req,res) => {
    res.render('dashboard');
});

app.get("/categorias",(req,res) => {
    res.render('categorias');
});

app.get("*",(req,res) => {
    res.render('404');
});

app.listen(puerto, () => {
    console.log('El servidor esta corriendo en el puerto', puerto)
}) 