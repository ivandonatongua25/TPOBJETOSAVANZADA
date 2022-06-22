const productos = []

require('mongoose');
const Producto= require('../models/producto');

const addProducto = async (req,res) => {
    const producto = new Producto(req.body);
             await producto.save()
            .then((data)=>res.json(data))
            .catch((errora=> res.json({messeage :errora}))) 
            console.log("Producto nuevo añadido");
}

const getProducto = async (req,res) => {

    const {email} = req.params;
    await Producto
   .findOne({email:email})
   .then((data)=>res.json(data))
   .catch((error=> res.json({messeage :error})))
   

}

const deleteProducto = async (req,res) => {
    
      
    const {email} = req.params;
    await Producto
   .deleteOne({email:email})
   .then((data)=>res.json(data))
   .catch((error=> res.json({messeage :error})))
}


const getProductos = async (req,res) => {

    await Producto
    .find()
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error}))) 
}





module.exports = { addProducto, getProducto, deleteProducto, getProductos }
