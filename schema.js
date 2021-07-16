const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    text: String,
    date: String,
});
const Feedback = mongoose.model('feedback',FeedbackSchema)
module.exports = Feedback