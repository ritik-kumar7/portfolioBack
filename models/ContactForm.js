import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
}, { timestamps: true });


const ContactForm = mongoose.model("ContactForm", contactSchema);

export default ContactForm;
