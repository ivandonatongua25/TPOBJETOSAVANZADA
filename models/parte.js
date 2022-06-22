const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const parteSchema = new Schema({

	
	descripcion:{
		type: String,
		required:true,
		index: {unique: true, dropDups: true}
	},
	
    cantpartesConsum:{
		type: Number,
		required:true,
	
		},
	
	cantpartesDesper:{
		type: Number,
		required:true,
	
		}
   
})

const parte = mongoose.model('parte',parteSchema);
module.exports = parte;