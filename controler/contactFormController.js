import ContactForm from "../models/ContactForm.js";

const contactFormController = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const contactForm = new ContactForm({ name, email, message });
        await contactForm.save();
        res.status(201).json({ message: "Message Send Successfully" });
    } catch (error) {
        console.error("Error submitting contact form:", error);
        res.status(500).json({ message: "Failed to submit contact form" });
    }
};



export default contactFormController;
