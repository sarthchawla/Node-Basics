const mongoose = require("mongoose");

let blogSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    author: String
});

module.exports = mongoose.model("Blog", blogSchema);