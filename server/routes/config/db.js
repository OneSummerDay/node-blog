const mogoose = require('mongoose');
const connectDB = async () =>{
    try {
        mogoose.set('srtictQuery', false);
        const conn = await mogoose.connect(process.env.MONGODB_URI);
        console.log(`Database connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;