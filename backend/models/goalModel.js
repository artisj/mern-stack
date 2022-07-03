const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please enter a text value']
    }
},
// creates automatically generated createdAt and updatedAt properties
{
    timestamps: true,
}
)

module.exports = mongoose.model('Goal', goalSchema);