const mongoose = require("mongoose")

const db = () => {
    try {
        mongoose.set('strictQuery', true)
        mongoose.connect(process.env.MONGO_URL)
        console.log("DB CONNNECTED".bgBlue);
    } catch (error) {
        console.log(`UNABLE TO CONNECT${error}`)
        process.exit()   //stop the server
    }
}

module.exports = db