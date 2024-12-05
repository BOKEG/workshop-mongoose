//creation of model called contact

let mongoose = require('mongoose');


const contactSchema =new mongoose.Schema({
    fullname:{
        type:String,
        required:[true,'fullname required']    
    },
    email:{
        type:String,
        required:[true,'give me a valid email']
    },phonenumber:{
        type:String,
        required:[true,'not less than ten digits']
    },birthdate:{
        type:String,
        required:[true,'full date required']
    
    }
    });

const contact =mongoose.model('Contact',contactSchema);
module.exports = contact;
