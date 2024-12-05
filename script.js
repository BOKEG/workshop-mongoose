const mongoose = require('mongoose');
const contactSchema =new mongoose.Schema({
fullname:{
    type:String,
    required:[true,'fullname required']

},
email:{
    type:String,
    required:[true,'give me a valid email']
},phonenumber:{
    type:number,
    required:[true,'not less than ten digits']
},birthdate:{
    type:date,
    required:[true,'full date required']

}
});
//create the method of searching a contact
const firstSearch= await contact.find({email:'Rayanjimcale45@gmail.com'})
.then(firstSearch=>{
    console.log(firstSearch);
})
.catch(err=>{
    console.log(err);
})
//create a method of searching and updating a document
const FirstUpdate=await contact.findOneAndUpdate(
    {
    email:'Rayanjimcale45@gmail.com',
    username:'rayan hassan'
},
    
    {
        email:'malimali@gmail.com',
        username:'mali mali'
    },
    {
        new:true,
        runValidators:true
    })

.then(firstUpdate=>{
    console.log(firstUpdate)
})
.catch(err=>{
    console.log(err);
})
//method of removing data
