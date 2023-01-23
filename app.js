const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const xl = require('excel4node');
const path = require('path');
// express //////////
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// express //////////
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
// Inicialización ///////////////////////////////////////

//FECHA
let date = new Date();
let fechaDia    = date.getUTCDate();
let fechaMes    = (date.getUTCMonth()) + 1; 
let fechaAño    = date.getUTCFullYear();
let fechaHora   = date.getUTCHours();
let fechaMinuto = date.getUTCMinutes();




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

app.get("/descargar-excel", function(req, res){
    
    // Configurar excel4node
    // Create a new instance of a Workbook class
    var wb = new xl.Workbook();
    let nombreArchivo = "todosUsuarios" + fechaDia + "_" + fechaMes + "_" + fechaAño + ".";
    var ws = wb.addWorksheet(nombreArchivo);

    // Crear estilos
    var cualColumnaEstilo = wb.createStyle({
        font: {
            name: 'Arial',
            color: '#000000',
            size: 12,
            bold: true,
        }
    });

    var contenidoEstilo = wb.createStyle({
        font: {
            name: 'Arial',
            color: '#494949',
            size: 11,
        }
    });


    //Nombres de las columnas
    ws.cell(1, 1).string("Nombre").style(cualColumnaEstilo);
    ws.cell(1, 2).string("Apellido").style(cualColumnaEstilo);
    ws.cell(1, 3).string("Edad").style(cualColumnaEstilo);
    ws.cell(1, 4).string("ID").style(cualColumnaEstilo);
    ws.cell(1, 5).string("Teléfono").style(cualColumnaEstilo);
    ws.cell(1, 6).string("Correo").style(cualColumnaEstilo);


    //Ruta del archivo
    const pathExcel = path.join(__dirname, 'excel', nombreArchivo + '.xlsx');

    //Escribir o guardar
    wb.write(pathExcel, function(err, stats){
        if(err) console.log(err);
        else{

            // Crear función y descargar archivo
            function downloadFile(){res.download(pathExcel);}
            downloadFile();

            console.log("Archivo descargado correctamente");
        }
    });
});




app.listen(3000, function() {
    console.log("Server started on port 3000");
});

