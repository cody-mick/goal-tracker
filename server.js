const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const logger = require("morgan");

const index = require("./server/routes/app");

// configure env variables
dotenv.config();

//* IMPORT ROUTING FILES
const goalsRoutes = require("./server/routes/goals");
const { use } = require("./server/routes/app");

// connect to MongoDB
mongoose.set("strictQuery", false);
mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.dpz94eu.mongodb.net/goal-tracker?retryWrites=true&w=majority`,
  { useNewUrlParser: true },
  (err, res) => {
    if (err) {
      console.log("Connection failed: ", err);
    } else {
      console.log("Successfully connected to database!");
    }
  }
);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger("dev")); // use morgan logger

// Add support for CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// Tell express to use the specified director as the
// root directory for your web site
app.use(express.static(path.join(__dirname, "dist/goal-tracker")));

// Tell express to map the default route ('/') to the index route
app.use("/", index);

// Map URL's to routing files
app.use("/goals", goalsRoutes);

// Tell express to map all other non-defined routes back to the index page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/goal-tracker/index.html"));
});

// Define the port address and tell express to use this port
const port = process.env.PORT || "3000";
app.set("port", port);

// Create HTTP server.
const server = http.createServer(app);

// Tell the server to start listening on the provided port
server.listen(port, function () {
  console.log("API running on localhost: " + port);
});
