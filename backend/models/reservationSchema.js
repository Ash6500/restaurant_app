import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "Firstname must contain at least 3 characters!"],
        maxLength: [30, "Firstname cannot exceed 30 characters!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Lastname must contain at least 3 characters!"],
        maxLength: [30, "Lastname cannot exceed 30 characters!"],
    },
    email: {
        type: String,
        required: true,
        validator: [validator.isEmail, "Provide a valid email!"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone Number must contain atleast 10 digits!"],
        minLength: [11, "Phone Number must contain atleast  11 digits!"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export const reservation = mongoose.model("Reservation", reservationSchema);