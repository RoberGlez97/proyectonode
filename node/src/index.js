var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "1234",
    database: "tallerservidores"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//const morgan=require('morgan');
//Routes
//app.use(require('./routes/index'));
//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//Iniciando el servidor, escuchando...

//usuario
app.get("/usuario", (recibido, respuesta) => { 
    const id = recibido.query.id_usuario;
    console.log(id);
    const sql = "SELECT * from datos_usuario where id_usuario = "+id;
    con.query(sql, function (err, result) {
      if (err) throw err;

      console.log("Result: " + JSON.stringify(result,null,2));
      respuesta.json(result);
    });

})
//Lista de usuarios
app.get("/usuarios", (recibido, respuesta) => { 
  const sql = "SELECT * from datos_usuario";
  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));
    respuesta.json(result);
  });

})


//Lista de vehículos filtrando por ID de usuario
app.get("/usuario/vehiculo", (recibido, respuesta) => { 
  const id = recibido.query.id_usuario;
  console.log(id);
  const sql = "SELECT * from lista_vehiculos where id_usuario = "+id;
  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));
    respuesta.json(result);
  });

})
//Información de un vehículo filtrando por el ID del vehículo
app.get("/vehiculo", (recibido, respuesta) => { 
  const id = recibido.query.id_vehiculo;
  console.log(id);
  const sql = "SELECT * from lista_vehiculos where id_vehiculo= "+id;
  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));
    respuesta.json(result);
  });

})
//Lista de servicios filtrando por un ID de vehículo
app.get("/vehiculo/listaservicios", (recibido, respuesta) => { 
  const id = recibido.query.id_vehiculo;
  console.log(id);
  const sql = "SELECT * from lista_servicios where id_vehiculo= "+id;
  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));
    respuesta.json(result);
  });

})
//Información de un servicio filtrando por el ID del servicio
app.get("/listaservicios", (recibido, respuesta) => { 
  const id = recibido.query.id_servicio;
  console.log(id);
  const sql = "SELECT * from lista_servicios where id_servicio= "+id;
  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));
    respuesta.json(result);
  });

});

//Modificar datos de un usuario
app.post("/editusuario", (recibido, respuesta) => { 
    const id_usuario = recibido.body.id_usuario;
    const nombre= recibido.body.nombre;
    const apellido1= recibido.body.apellido1;
    
    const sql = "update datos_usuario set nombre='"+ nombre + "',apellido1= '"+apellido1+ "' where id_usuario=" + id_usuario;
    con.query(sql, function (err, result) {
      if (err) throw err;

      console.log("Result: " + JSON.stringify(result,null,2));
      respuesta.json(result);
    });

});

//eliminar  un usuario
app.post("/deleteusuario", (recibido, respuesta) => { 
  const id_usuario = recibido.body.id_usuario;
 
  
  const sql = "delete from datos_usuario where id_usuario=" + "'"+ id_usuario+"'";
  console.log(sql);
  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));
    respuesta.json(result);
  });

});
 
//crear usuario
app.post("/createuser", (recibido, respuesta) => { 
  const id_usuario = recibido.body.id_usuario;
  const nombre= recibido.body.nombre;
  const apellido1=recibido.body.apellido1;
  const apellido2= recibido.body.apellido2;
  const fecha_alta=recibido.body.fecha_alta;
  const pass=recibido.body.pass;
  const administrador=recibido.body.administrador;
  const sql = "INSERT INTO datos_usuario (id_usuario, nombre, apellido1, apellido2,fecha_alta,pass,administrador) values  ("+"'"+id_usuario+"',"+ "'"+nombre+"',"+"'"+apellido1+"',"+"'"+apellido2+"',"+ "'"+fecha_alta+"',"+ "'"+pass+"',"+ "'"+administrador+"')";
 
  console.log(sql);
  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));
    respuesta.json(result);
  });

});

//crear vehiculo
app.post("/crearvehiculo", (recibido, respuesta) => { 
  const id_usuario = recibido.body.id_usuario;

  const marca=recibido.body.marca;
  const modelo= recibido.body.modelo;
  const matricula=recibido.body.matricula;
  const combustible=recibido.body.combustible;
  const tipo_motor=recibido.body.tipo_motor;
  const sql = "INSERT INTO lista_vehiculos (id_usuario, marca, modelo,matricula,combustible,tipo_motor) values  ("+"'"+id_usuario+"',"+"'"+marca+"',"+"'"+modelo+"',"+ "'"+matricula+"',"+ "'"+combustible+"',"+ "'"+tipo_motor+"')";
 
  console.log(sql);
  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));
    respuesta.json(result);
  });

});

//Modificar datos de un vehiculo
app.post("/editvehiculo", (recibido, respuesta) => { 
  const id_usuario = recibido.body.id_usuario;
  const id_vehiculo= recibido.body.id_vehiculo;
  const marca= recibido.body.marca;
  
  const sql = "update lista_vehiculos set id_usuario='"+ id_usuario + "',marca= '"+marca+ "' where id_vehiculo=" + id_vehiculo;
  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));
    respuesta.json(result);
  });

});

//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});
