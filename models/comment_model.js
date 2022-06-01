const mongoose = require("mongoose");

let commentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    text: String,
    createdAt: Date,
    blogId: String
});

commentSchema.pre("save", function (next) {
    let now = Date.now();
    this._id = new mongoose.Types.ObjectId();
    this.createdAt = now;
    next();
});

module.exports = mongoose.model("Comment", commentSchema);