const mongoose = require('mongoose');
const connectDB = async () => {
  const conn = await mongoose.connect("mongodb+srv://Ahmed:ahmed123@cluster0.8dp85.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`mongo connected: ${conn.connection.host}`);
};
module.exports = connectDB;
