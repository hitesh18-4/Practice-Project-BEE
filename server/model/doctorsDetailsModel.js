// doctorsDetails.js

//
//{ name,
// speciality,
// phonenumber,
// experience,
// address
// }

const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    speciality: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    experience: {
        type: Number, // years of experience
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
