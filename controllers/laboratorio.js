const laboratorios = []

require('mongoose');
const Laboratorio =require('../models/laboratorio');

const addLaboratorio = async (req,res) => {
    const laboratorio = new Laboratorio(req.body);
             await laboratorio.save()
            .then((data)=>res.json(data))
            .catch((errora=> res.json({messeage :errora}))) 
            console.log("Laboratorio nuevo añadido");
}

const getLaboratorio = async (req,res) => {

      
    const {email} = req.params;
    await Laboratorio
   .findOne({email:email})
   .then((data)=>res.json(data))
   .catch((error=> res.json({messeage :error})))

}

const deleteLaboratorio = async (req,res) => {
    
    
    const {email} = req.params;
    await Laboratorio
   .deleteOne({email:email})
   .then((data)=>res.json(data))
   .catch((error=> res.json({messeage :error})))
 
}


const getLaboratorios = async (req,res) => {

    await Laboratorio
    .find()
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error}))) 
}





module.exports = { addLaboratorio, getLaboratorio, deleteLaboratorio, getLaboratorios }
