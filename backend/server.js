// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000; // Use a different port than your frontend

// Middleware to parse JSON and enable CORS
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
// Replace <your_connection_string> with your actual connection string from MongoDB Atlas
const uri = "<your_connection_string>";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});


// Your API routes will go here
const cropsRouter = require('./routes/crops'); // <-- This line must be correct
app.use('/api/crops', cropsRouter);

// ... (other code) ...

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});