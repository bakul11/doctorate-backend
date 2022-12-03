const mongoose = require('mongoose');

const conectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_CONECT_URL);
        console.log("Database connnect successfully Done");
    } catch (error) {
        console.log("Database connect fail...")
    }
}

module.exports = conectDB;