const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const laboratorioSchema = new Schema({

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

const laboratorio = mongoose.model('laboratorio',laboratorioSchema);
module.exports = laboratorio;