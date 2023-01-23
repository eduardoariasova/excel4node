const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
// express //////////
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// express //////////
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
// Inicialización ///////////////////////////////////////




// usuarios
let usuarios = [
    {
        nombre: "daniel",
        apellido: "perez",
        edad: "27",
        id: "45345645",
        telefono: "344564576",
        correo: "daniel@gmail.com",
    },
    {
        nombre: "Pedro",
        apellido: "suarez",
        edad: "25",
        id: "45345645111",
        telefono: "3445645722226",
        correo: "petro@gmail.com",
    },
    {
        nombre: "alejandra",
        apellido: "ospina",
        edad: "29",
        id: "453456434235",
        telefono: "34452342364576",
        correo: "alejandra@gmail.com",
    },
    {
        nombre: "gabriel",
        apellido: "arias",
        edad: "22",
        id: "4534564523423",
        telefono: "3445645734236",
        correo: "gabriel@gmail.com",
    },
    {
        nombre: "camilo",
        apellido: "buitrago",
        edad: "28",
        id: "4534523645",
        telefono: "3445645712316",
        correo: "camilo@gmail.com",
    },
    {
        nombre: "sebastian",
        apellido: "garcia",
        edad: "29",
        id: "453456412315",
        telefono: "34456123124576",
        correo: "sebastian@gmail.com",
    },
];





app.get("/", function(req, res){
    res.render("home");
});

app.post("/descargar-excel", function(req, res){
    
    



});




app.listen(3000, function() {
    console.log("Server started on port 3000");
});

