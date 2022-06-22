const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

	email:{
		type: String,
		required:true,
		index: {unique: true, dropDups: true}
	},
	name:{
		type: String,
		required:true
    },
    surname:{
		type: String,
		required:true
	},
	edad:{
		type: Number,
		required:true
	}
})

const user = mongoose.model('user',userSchema);
module.exports = user;