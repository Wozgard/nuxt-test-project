const { Schema, model } = require('mongoose');

const schema = new Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
        required: true
    },
    job: {
        type: String/* mongoose.ObjectId */,
        required: true
    },
    delete: {
        type: Boolean,
        required: true
    }
}, {
    collection: "team"
})

module.exports = model('team', schema)