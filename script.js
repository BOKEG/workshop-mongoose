const mongoose = require('mongoose');
require('./database')

const contactModel = require('./models/ContactSchema');

// const contact = new contactModel({
//     fullname: 'mufasa',
//     email: 'lolo@gmail.com',
//     phonenumber: '231224571',
//     birthdate: '01/10/2024'
// })

// contact.save().then((user) => {
//     console.log(`user created ${user}`);
// }).catch(err => console.log(`error creating user`, err))

//find all records
// contactModel.find({}).then(doc => {
//     console.log(doc)
// }).catch(err => {
//     console.log(err)
// })

//findOne and update
// contactModel.findOneAndUpdate({
//     fullname: 'Lili'
// },
// {
//     fullname: 'Lilo'
// },
//     {
//         new:true,
//         runValidators:true
//     }
//     ).then(doc =>{
//         console.log(doc)
//     })
//     .catch(err =>{
//         console.error('error updating',err)
//     })

//delete record

// contactModel.findOneAndDelete({
//     fullname:'Asuga'
// }).then(response =>{
//     console.log(response)
// }).catch(err =>{
//     console.error('object not deleted', err)
// })

//update many

// contactModel.updateMany(
//     {fullname:'mufasa'},
//     {$set:{fullname:'Simba'}}
// ).then(result =>{
//     console.log(result)
// }).catch(err =>{
//     console.log('object not updated',err)
// })

//create the method of searching a contact
// const firstSearch= await contact.find({email:'Rayanjimcale45@gmail.com'})
// .then(firstSearch=>{
//     console.log(firstSearch);
// })
// .catch(err=>{
//     console.log(err);
// })
// //create a method of searching and updating a document
// const FirstUpdate=await contact.findOneAndUpdate(
//     {
//     email:'Rayanjimcale45@gmail.com',
//     username:'rayan hassan'
// },
    
//     {
//         email:'malimali@gmail.com',
//         username:'mali mali'
//     },
//     {
//         new:true,
//         runValidators:true
//     })

// .then(firstUpdate=>{
//     console.log(firstUpdate)
// })
// .catch(err=>{
//     console.log(err);
// })
// //method of removing data



