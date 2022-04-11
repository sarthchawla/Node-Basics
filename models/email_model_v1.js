const mongoose = require("mongoose");

let emailSchema = new mongoose.Schema({
    email: String,
    updateAt: Date,
    createdAt: Date
});

emailSchema.pre('save', function (next) { // Pre-save hook example
    let now = Date.now();

    this.updateAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }

    next();
});

emailSchema.post('save', function (doc, next) { // Post-save hook example
    console.log('%s has been saved', doc._id);
    // do the mailing
    next();
});

emailSchema.methods.UpperCase = function () { // Instance Method example
    return this.email.toUpperCase();
}

emailSchema.statics.findByContains = function (word) { // Static Method example
    this.find({ email: { $regex: word } }, (err, docs) => {
        if (err) {
            console.log(err);
        } else {
            console.log(docs);
        }
    }
    );
}

module.exports = mongoose.model("Email2", emailSchema);