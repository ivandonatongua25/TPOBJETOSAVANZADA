const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productoSchema = new Schema({

	nombre:{
		type: String,
		required:true,
		index: {unique: true, dropDups: true}
	},
	descripcion:{
		type: String,
		required:true
    },
    stock:{
		type: Number,
		required:true
	},
    precio:{
		type: Number,
		required:true
	}
})

const producto = mongoose.model('producto',productoSchema);
module.exports = producto;