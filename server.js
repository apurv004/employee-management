const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

// database connection
connectDB();

// routes
app.use("/api/employees", require("./routes/employeeRoutes"));

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
