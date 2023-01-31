const mongoose = require("mongoose")

const bogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Provide title"]
    },
    
    desc: {
        type: String,
        required: [true, "Please Provide Desc"]
    },
    image: {
        type: String,
        required: [true, "Please Provide Image Url"]
    },
    
    publish: {
        type: Boolean,
        default: false
    }
    
})

module.exports = mongoose.model("blog", bogSchema)