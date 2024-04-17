const Contact = require('../models/Contact');

exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user._id });
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.createContact = async (req, res) => {
    try {
        const { name, email, telephone, address, category } = req.body;

        const newContact = new Contact({
            user: req.user.id,
            name,
            email,
            telephone,
            address,
            category
        });

        await newContact.save();

        res.status(201).json({ message: 'Contact created successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};