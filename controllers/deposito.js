const depositos = []

require('mongoose');
const Deposito = require('../models/deposito');

const addDeposito = async (req,res) => {
    const deposito = new Deposito(req.body);
    await deposito.save()
   .then((data)=>res.json(data))
   .catch((errora=> res.json({messeage :errora}))) 
   console.log("Deposito nuevo añadido");
}

const getDeposito = async (req,res) => {
    const {email} = req.params;
    await Deposito
   .findOne({email:email})
   .then((data)=>res.json(data))
   .catch((error=> res.json({messeage :error})))
}

const deleteDeposito = async (req,res) => {
    const {email} = req.params;
    await Deposito
   .deleteOne({email:email})
   .then((data)=>res.json(data))
   .catch((error=> res.json({messeage :error})))

}


const getDepositos = async (req,res) => {

    await Deposito
    .find()
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))   
}





module.exports = { addDeposito, getDeposito, deleteDeposito, getDepositos }
