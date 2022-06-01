const mongoose = require('mongoose');
const BlogModel = require('./models/blog_model');
const CommentModel = require('./models/comment_model');

// step 1: create a connection to the database
mongoose.connect("mongodb://localhost:27017/BlogData");

let currentBlogId = new mongoose.Types.ObjectId();
let blog = new BlogModel({
    _id: currentBlogId,
    title: "My First Blog",
    author: "Sarthak",
});

blog.save()
    .then(doc => {
        console.log(doc);
    })
    .then(err => {
        console.log(err);
    });

let comment1 = new CommentModel({
    username: "Devesh",
    text: "What a great blog!",
    blogId: currentBlogId
});

comment1.save()
    .then(doc => {
        console.log(doc);
        //addCommentToBlog(doc._id);
    })
    .then(err => {
        console.log(err);
    });

let comment2 = new CommentModel({
    username: "Gaurav",
    text: "I like your blog!",
    blogId: currentBlogId
});

comment2.save()
    .then(doc => {
        console.log(doc);
        //addCommentToBlog(doc._id);
    })
    .then(err => {
        console.log(err);
    });

let addCommentToBlog = (commentId) => {
    BlogModel.findOneAndUpdate({ _id: currentBlogId }, { $push: { comments: commentId } }, { new: true })
        .then(doc => {
            console.log(doc);
        })
        .then(err => {
            console.log(err);
        });
}


// let admsn = new SchoolAdmissionModel({
//     _id: "12345",
//     enrollmentCode: "ABCDE",
//     child: {
//         _id: "99999",
//         name: "John",
//         age: 12,
//         gender: "Male"
//     }
// });

// admsn.save()
//     .then(doc => {
//         console.log(doc);
//     })
//     .then(err => {
//         console.log(err);
//     });

// step 2: create EmailModel instance/object
// let msg = new EmailModel({
//     email: "newEmail1234@gmail.com"
// });


// step 3: save the Instance/Object to the database
// msg.save() // create
//     .then(doc => {
//         console.log(doc);
//     })
//     .then(err => {
//         console.log(err);
//     });


// msg.findByContains("some");

// EmailModel.find({email: "abc-NEW@gmail.com"}) // read
//     .then(doc => {
//         console.log("Found");
//         console.log(doc);
//         //console.log(doc.findByContains("some"));
//     })
//     .then(err => {
//         console.log(err);
//     });

// update

// EmailModel.findOneAndUpdate(
//     {
//         email: "myemailisallsmallcase-123456.com"
//     },
//     {
//         email: "latestemail@gmail.com",
//     },
//     {
//         new: true,
//         runValidators: true
//     })
//     .then(doc => {
//         console.log("Updated");
//         console.log(doc);
//         console.log(doc.UpperCase());
//         console.log(doc.SpecialAbility());
//     })
//     .then(err => {
//         console.log(err);
//     });


// EmailModel.findByContains("latest")





