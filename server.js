const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();

console.log("Starting server.js");

process.on("uncaughtException", (err) => {
  console.error("Uncaught exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection:", reason);
  process.exit(1);
});

app.use(cors());
app.use(express.json());

mongoose.connect(
"mongodb://manoj:manoj123@ac-jnqn6kg-shard-00-00.7kcw0q6.mongodb.net:27017,ac-jnqn6kg-shard-00-01.7kcw0q6.mongodb.net:27017,ac-jnqn6kg-shard-00-02.7kcw0q6.mongodb.net:27017/?ssl=true&replicaSet=atlas-8oiyc8-shard-0&authSource=admin&appName=Cluster0"
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/contact", contactRoutes);
app.use("/api/feedback", feedbackRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});