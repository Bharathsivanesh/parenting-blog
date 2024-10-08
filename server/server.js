const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/connectDB");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "config", "config.env") });

app.use(
  cors({
    origin: "https://parenting-blog-9pzt.vercel.app",
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
connectDB();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

const users = require("./routes/userRoutes");
const blogs = require("./routes/userblogroutes");

app.use(express.json());
app.use("/parental-blog/", users);
app.use("/parental-blog/", blogs);
app.get("/", (req, res) => {
  res.send("Server is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running port ${PORT}`);
});
