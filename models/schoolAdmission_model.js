const mongoose = require("mongoose");

let schoolAdmsnSchema = new mongoose.Schema({
    _id: String,
    enrollmentCode: String,
    child: {
        _id: String,
        name: String,
        age: Number,
        gender: String
    }
});

module.exports = mongoose.model("schoolAdmission", schoolAdmsnSchema);