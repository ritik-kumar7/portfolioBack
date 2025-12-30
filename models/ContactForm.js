import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});


const ContactForm = mongoose.model("ContactForm", contactSchema);

export default ContactForm;
