const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const discs = require("./routes/api/discs");
const values = require("./routes/api/values");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").monguURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Route
app.use("/api/users", users);
app.use("/api/discs", discs);
app.use("/api/values", values);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
