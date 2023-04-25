const mongoose = require('mongoose');

const User2 = new mongoose.Schema(
    {
        name: { type: String, required: true },
        contact: { type: Number, required: true },
        email: { type: String, required: true, unique:true},
        grp: { type: String, required: true },
        unit: { type: Number, required: true }
    },
    { collection: 'Needed' }
)

const model = mongoose.model('form2', User2);

module.exports = model;