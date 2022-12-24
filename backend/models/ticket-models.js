const mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.set('strictQuery', true)

const ticketSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    titleDescription: {
        type: String,
        required: true
    }
    // type: {
    //     type: String,
    //     required: true
    // },
    // priority: {
    //     type: String,
    //     required: true
    // },
    // status: {
    //     type: String,
    //     required: true
    // }
}, { timestamps: true})

module.exports = mongoose.model('ticket', ticketSchema)

