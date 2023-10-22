const express = require('express');
const mongoose = require("mongoose");
const timezoneInsert = require('../services/timezoneService');

const app = express();

// Wrap the entire code in an async function to use async/await
const startServer = async () => {
    try {
        // Connect to the MongoDB database
        await mongoose.connect('mongodb+srv://surajbhanarkar08:suraj162@surajbhanarkar.uobtiag.mongodb.net/');
        console.log("Connected to MongoDB");

        // Register your middleware
        app.use('/trigger_report', timezoneInsert);


        // Start the Express server
        const port = 4001;
        app.listen(port, () => {
            console.log("Server is running on port ->", port);
        });
    } catch (error) {
        console.error("Error starting server:", error);
    }
};

// Call the async function to start the server
startServer();
