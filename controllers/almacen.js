const almacenes = []

require('mongoose');
const Almacen = require('../models/almacen');

const addAlmacen = async (req,res) => {
   
    const almacen = new Almacen(req.body);
             await almacen.save()
            .then((data)=>res.json(data))
            .catch((errora=> res.json({messeage :errora}))) 
            console.log("Almacen nuevo añadido");
}

const getAlmacen = async (req,res) => {

    const {email} = req.params;
    await Almacen
   .findOne({email:email})
   .then((data)=>res.json(data))
   .catch((error=> res.json({messeage :error})))
   

}

const deleteAlmacen = async (req,res) => {

     
    const {email} = req.params;
    await Almacen
   .deleteOne({email:email})
   .then((data)=>res.json(data))
   .catch((error=> res.json({messeage :error})))
}


const getAlmacenes = async (req,res) => {

    await Almacen
    .find()
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error}))) 
}





module.exports = { addAlmacen, getAlmacen, deleteAlmacen, getAlmacenes }
