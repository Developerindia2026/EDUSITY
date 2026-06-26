require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoute = require("./routes/Contact");

const app = express();

const PORT = process.env.PORT || 3000;

/* Middleware */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/* Test Route */

app.get("/", (req, res) => {
  res.send("Backend is running successfully.");
});

/* Routes */

app.use("/contact", contactRoute);

/* Server */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});