// registerDoctor.js
const asyncHandler = require("express-async-handler");
const Doctor = require("../model/doctorModel");

const registerDoctor = asyncHandler(async (req, res) => {
    const { name, speciality, phoneNumber, experience, address } = req.body;

    // Check if required fields are present
    if (!name || !speciality || !phoneNumber || !experience || !address) {
        res.status(400);
        throw new Error("Please fill all fields");
    }

    // Check if doctor already exists based on phone number or name (customize as needed)
    const doctorExists = await Doctor.findOne({ phoneNumber });
    if (doctorExists) {
        return res.status(400).json({ message: "Doctor already exists" });
    }

    // Create new doctor
    const doctor = await Doctor.create({
        name,
        speciality,
        phoneNumber,
        experience,
        address,
    });

    res.status(201).json({ message: "Doctor registered successfully", doctor });
});


// Login user with static token
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check for user
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    // Static token generation (for example purpose)
    const token = "static_token_for_user"; // Replace with actual logic for generating token

    res.json({ message: "Login successful", token });
});



module.exports = { registerDoctor };
