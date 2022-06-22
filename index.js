const express = require("express");
const app =express();
const mongoose = require("mongoose");
const http = require("http").createServer(app);
const cors = require("cors");
require('dotenv').config();
const bodyParser= require("body-parser")
const PORT = process.env.PORT || 4000;
const { addUser, getUser, deleteUser, getUsers } = require("./controllers/users");
const { addAlmacen, getAlmacen, deleteAlmacen, getAlmacenes } = require("./controllers/almacen");
const { addLaboratorio, getLaboratorio, deleteLaboratorio, getLaboratorios }= require("./controllers/laboratorio");
const  { addParte, getParte, deleteParte, getPartes } = require("./controllers/parte");
const { addDeposito, getDeposito, deleteDeposito, getDepositos } = require("./controllers/deposito");
const { addProducto, getProducto, deleteProducto, getProductos } = require("./controllers/producto");

const uri = process.env.MONGO_URI;

let Usrjson = require("./database/users.json");
let partejsn = require("./database/parte.json");
let laboratoriojson = require("./database/laboratorio.json");
let almacenjson = require("./database/almacen.json");
let depositojson = require("./database/deposito.json");
let productojson = require("./database/producto.json");


/////*************los modelos********** */
let Usr = require("./models/users");
let parte = require("./models/parte");
let laboratorio = require("./models/laboratorio");
let almacen = require("./models/almacen");
let deposito = require("./models/deposito");
let producto = require("./models/producto");
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Server is up and running");
});


//************ USER ADD  ********************/
app.use("/users/new", addUser)
// **************** USER GET TODOS LOS USUARIOS ****************************/
app.use("/ver/todos/users", getUsers);
//**** USER GET CON FILTRO  *******/
app.use("/users/ver/:email", getUser);
//**********USER BORRAR CON FILTRO*******************/
app.use("/users/borrar/:email", deleteUser);




//*******************LABORATORIO ADD **********************/
app.use("/laboratorio/new", addLaboratorio);
// **************** LABORATORIO GET TODOS LOS LABORATORIOS ****************************/
app.use("/laboratorios/ver/todos", getLaboratorios);
/*******************LABORATORIO GET CON FILTRO *********************************/
app.use("/laboratorio/ver/:email", getLaboratorio);
/*******************LABORATORIO BORRAR  *********************************/
app.use("/laboratorio/borrar/:email", deleteLaboratorio);







/************************* ALMACEN ADD  *********************************/
app.post("/almacen/new", addAlmacen);
/************************* ALMACEN GET TODOS LOS ALMACEN *********************************/
app.get("/almacen/ver/todos", getAlmacenes);
/*******************ALMACEN GET CON FILTRO *********************************/
app.get("/almacen/ver/:email", getAlmacen);
/*******************ALMACEN BORRAR  *********************************/
app.delete("/almacen/borrar/:email", deleteAlmacen);






//************************ DEPOSITO ADD   **************************************/
app.post("/deposito/new", addDeposito);
//**** DEPOSITO GET TODOS LOS DEPOSITOS  *******/
app.get("/deposito/ver/todos", getDepositos);
//*********************DEPOSITO GET CON FILTRO ***********************************/
app.get("/deposito/ver/:email", getDeposito);
//*********************DEPOSITO BORRAR ***********************************/
app.delete("/deposito/borrar/:email", deleteDeposito);





//************************ PARTE ADD   **************************************/
app.post("/parte/new", addParte);
//**** PARTE GET TODAS LAS PARTES  *******/
app.get("/parte/ver/todos/:limite", getPartes);
//*********************PARTE GET CON FILTRO ***********************************/
app.get("/parte/ver/:descripcion", getParte);
//*********************PARTE BORRAR ***********************************/
app.delete("/parte/borrar/:descripcion", deleteParte);






//********************   PRODUCTO ADD ****************************************************/
app.post("/producto/new", addProducto);
//*********** PRODUCTO GET TODOS LAS PRODUCTOS  *****************************************/
app.get("/productos/ver/todos", getProductos);
//******************  PRODUCTO GET CON FILTRO ***********************************/
app.get("/producto/ver/:nombre", getProducto);
//*********************PRODUCTO BORRAR ***********************************/
app.delete("/producto/borrar/:nombre", deleteProducto);




//*****************LEVANTO SERVIDOR  **************************************/
http.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});

