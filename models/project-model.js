const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Project = new Schema(
    {
        title: { type: String, required: true },
        time: { type: [String], required: true },
        previewText: { type: Number, required: true },
        fullText: { type: String, required: true },
        owner: { type: String, required: true }, // change to type user later
    },
    { timestamps: true },
)

module.exports = mongoose.model('projects', Project)
