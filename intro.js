let EmailModel = require('./models/email_model_v1');
const mongoose = require('mongoose');

// step 1: create a connection to the database
mongoose.connect("mongodb://localhost:27017/testDB");

// step 2: create EmailModel instance/object
let msg = new EmailModel({
    email: "New Email Address is saved with pre hook"
});

// step 3: save the Instance/Object to the database
msg.save() // create
    .then(doc => {
        console.log(doc);
    })
    .then(err => {
        console.log(err);
    });


// msg.findByContains("some");

// EmailModel.find({email: "mail"}) // read
//     .then(doc => {
//         console.log("Found");
//         console.log(doc);
//         console.log(doc.findByContains("some"));
//     })
//     .then(err => {
//         console.log(err);
//     });

// update

// EmailModel.findOneAndUpdate(
//     {
//         email: "sarth.chawla@gmail.com"
//     },
//     {
//         email: "newEmail.com"
//     },
//     {
//         new: true,
//         runValidators: true
//     })
//     .then(doc => {
//         console.log("Updated");
//         console.log(doc.UpperCase());
//     })
//     .then(err => {
//         console.log(err);
//     });


// EmailModel.findByContains("some")





