let users = [{
    name:"ivan",
    surname:"donato",
    email:"estu@gmail.com"

},
{
    name:"iv",
    surname:"don",
    email:"es@gmail.com"  
}
]

// id es socket.id y userId se refiere al id que tiene en Juntos
require('mongoose');


let Usr = require('../models/users');

let addUser = async(req,res) => {
    
            const usr = new Usr(req.body);
            let user = await usr.save()
            .then((data)=>res.json(data))
            .catch((errora=> res.json({messeage :errora}))) 
            console.log("usuario nuevo añadido");
} 

   


let getUser = async (req,res) => {

    const {email} = req.params;
     await Usr
    .findOne({email:email})
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
  
}

let deleteUser = async (req,res) => {
    
    const {email} = req.params;
    await Usr
   .deleteOne({email:email})
   .then((data)=>res.json(data))
   .catch((error=> res.json({messeage :error})))
 
}


const getUsers = async (req,res) => {

    await Usr
    .find()
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
}



//const getUsers = (room) => users.filter(user => user.room === room)


module.exports = { addUser, getUser, deleteUser, getUsers }
