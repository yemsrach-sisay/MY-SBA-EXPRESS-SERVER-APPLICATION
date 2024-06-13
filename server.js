const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
const requestTime = require("./middleware/requestTime");
const logRequest = require("./middleware/logRequest");
const { errorHandler, notFoundHandler } = require("./middleware/errorHandler");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Custom middleware
app.use(requestTime);
app.use(logRequest);

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.use("/", require("./routes/index"));

// Error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
