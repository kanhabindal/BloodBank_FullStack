const mongoose = require('mongoose');

const cnt = new mongoose.Schema(
    {
        name: { type: String, required: true },
        contact: { type: Number, required: true },
        email: { type: String, required: true, unique:true},
        query: { type: String, required: true },
    },
    { collection: 'contact' }
)

const model = mongoose.model('contact', cnt);

module.exports = model;