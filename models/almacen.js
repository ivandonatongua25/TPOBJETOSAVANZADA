const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const almacenSchema = new Schema({

	nombre:{
		type: String,
		required:true,
		index: {unique: true, dropDups: true}
	},
	ubicacion:{
		type: String,
		required:true
    },
    email:{
		type: String,
		required:true
	},
    telefono:{
		type: Number,
		required:true
	}
})

const almacen = mongoose.model('almacen',almacenSchema);
module.exports = almacen;