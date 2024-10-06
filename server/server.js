const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require('./config/connectDB');
const dotenv = require("dotenv");
const path = require('path');

dotenv.config({path: path.join(__dirname, 'config', 'config.env')})
app.use(cors());
connectDB();
const users = require('./routes/userRoutes')

app.use(express.json());
app.use('/parental-blog/',users)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running port ${PORT}`);
});
