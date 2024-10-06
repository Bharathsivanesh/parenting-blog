const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log("db connection error"));

app.get("/api", (req, res) => {
  res.send("  WELCOME TO THE API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running port ${PORT}`);
});
