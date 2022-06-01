const mongoose = require("mongoose");

let emailSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    address: mongoose.Schema.Types.Mixed,
    email: String,
    updateAt: Date,
    createdAt: Date
});

emailSchema.methods.UpperCase = function () { // Instance Method example
    return this.email.toUpperCase();
}

emailSchema.methods.SpecialAbility = function () { // Instance Method example
    return this.email + " has a special ability";
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





emailSchema.pre('save', function (next) { // Pre-save hook example
    let now = Date.now();
    this._id = new mongoose.Types.ObjectId();
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


module.exports = mongoose.model("NewEmail", emailSchema);

