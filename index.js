const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const app = express();

// Load environment variables
require("dotenv").config();

// Get current environment. If not found: production.
const env = process.env.NODE_ENV || "production";

// Middleware
app.use(morgan(env === "development" ? "dev" : "tiny"));
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Add routes to app

const routes = require("./routes");

app.use("/api", routes);

// Serve static files

// if (env === "production") {
//     app.use(express.static(path.join(__dirname, "client/build")));

//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "client/build", "index.html"));
//     });
// }

// Create listener
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${listener.address().port}. ENV=${env}`);
});
