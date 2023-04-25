const mongoose = require('mongoose');

const User1 = new mongoose.Schema(
    {
        name: { type: String, required: true },
        contact: { type: Number, required: true },
        email: { type: String, required: true, unique:true},
        grp: { type: String, required: true },
    },
    { collection: 'Donate' }
)

const model = mongoose.model('form1', User1);

module.exports = model;