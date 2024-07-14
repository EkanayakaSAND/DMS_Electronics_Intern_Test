const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");

const dbConnection = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const algorithmRoutes = require('./routes/algorithmRoutes')

dotenv.config();

const port = process.env.PORT || 4001;
const app = express();

// --------------------------- Middleware -----------------------------

// app.use(cors(
//   {
//     origin: "*",
//     methods: ["GET", "POST"],
//     credentials: true, 
//   }
// ));

// Enable CORS for all origins
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());
app.use(morgan("dev"));
dbConnection();

// ----------------------------- Routes -------------------------------
app.get('/', (req, res) => {
  res.json("Backend working...")
})
app.use("/api/authentication", authRoutes);
app.use("/api/algorithms", algorithmRoutes);

// ---------------------- Server Initialization -----------------------

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
