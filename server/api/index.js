const express = require("express");
const cors = require("cors");
require("dotenv").config();
const serverless = require("serverless-http");

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection setup
const { MongoClient, ServerApiVersion } = require("mongodb");

let client;
let jobsCollections;
console.log(
  `user : ${process.env.DB_USER} and Password is ${process.env.DB_PASSWORD}`
);

async function connectToDb() {
  try {
    // MongoDB connection string from environment variables
    console.log(
      `user : ${process.env.DB_USER} and Password is ${process.env.DB_PASSWORD}`
    );
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-platform.enxd7.mongodb.net/?retryWrites=true&w=majority&appName=job-platform`;

    // MongoDB client configuration (removed deprecated options)
    client = new MongoClient(uri, {
      serverApi: ServerApiVersion.v1, // Keep this for API versioning if needed
    });

    // Connect to MongoDB
    await client.connect();

    // Get database and collection references
    const db = client.db("job-platform");
    jobsCollections = db.collection("demoJobs");
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

// Ensure the DB connection is established before handling requests
connectToDb();

// Middlewares
app.use(express.json());
app.use(cors());

// POST a job
app.post("/post-job", async (req, res) => {
  const body = req.body;
  body.createdAt = new Date();

  try {
    const result = await jobsCollections.insertOne(body);
    if (result.insertedId) {
      res.status(201).send(result); // 201 Created for POST requests
    } else {
      res.status(400).json({ message: "Job insertion failed!", status: false });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error!", status: false });
  }
});

// GET all jobs
app.get("/all-jobs", async (req, res) => {
  try {
    const jobs = await jobsCollections.find().toArray();
    res.send(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", status: false });
  }
});

// GET jobs posted by a specific user (using email)
app.get("/myJobs/:email", async (req, res) => {
  try {
    const jobs = await jobsCollections
      .find({ postedBy: req.params.email })
      .toArray();
    res.send(jobs);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user's jobs", status: false });
  }
});

// A simple ping endpoint to check if the server is running
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Log the port number the server is running on
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export the Express app wrapped in serverless-http for deployment on Vercel
module.exports.handler = serverless(app);
