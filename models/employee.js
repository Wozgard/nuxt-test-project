const { Schema, model, default: mongoose } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    job: {
        type: String/* mongoose.ObjectId */,
        required: true
    },
    description: {
        type: String,
    }
})

module.exports = model('employee', schema)