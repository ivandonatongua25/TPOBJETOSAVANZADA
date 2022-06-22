const Partes = []

require('mongoose');
const Parte = require('../models/parte');

const addParte = async (req,res) => {
    
    const parte = new Parte(req.body);
    await parte.save()
   .then((data)=>res.json(data))
   .catch((errora=> res.json({messeage :errora}))) 
   console.log("Parte nueva añadido");
}

const getParte = async (req,res) => {

   
    const {descripcion} = req.params;
    await Parte
   .findOne({descripcion:descripcion})
   .then((data)=>res.json(data))
   .catch((error=> res.json({messeage :error})))
   


}

const deleteParte = async (res,req) => {
    
    const {descripcion} = req.params;
    await Parte
   .deleteOne({descripcion:descripcion})
   .then((data)=>res.json(data))
   .catch((error=> res.json({messeage :error})))
}


const getPartes = async (req,res) => {
    let limite = req.params.limite;
    
    await Parte
    .find()
    .limit(limite)
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error}))) 



   
}





module.exports = { addParte, getParte, deleteParte, getPartes }
