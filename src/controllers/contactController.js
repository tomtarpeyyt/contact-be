const Contact = require('../models/Contact');

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