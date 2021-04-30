const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        cnp: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        address: { type: String, required: true },
        citizenType: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    }, {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }

);

userSchema.virtual("fullName").get(function() {
    return this.firstName + " " + this.lastName;
});


module.exports = mongoose.model("User", userSchema);