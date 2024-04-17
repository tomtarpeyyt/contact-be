const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    email: { type: String },
    telephone: { type: String },
    address: { type: String },
    category: { type: String, enum: [ 'individual', 'business'], required: true }
});

module.exports = mongoose.model('Contact', contactSchema);