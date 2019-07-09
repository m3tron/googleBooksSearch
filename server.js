const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const mongoURL =
  process.env.PROD_MONGODB ||
  "mongodb://ryanreynolds:deadpool69@ds161175.mlab.com:61175/heroku_74tg0dzw";
mongoose
  .connect(mongoURL, { useNewUrlParser: true })
  .then(() => {
    console.log("Successfully connected to mongoDB.");
  })
  .catch(err => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });

// Define API routes here
app.use("/", require("./routes/api-routes"));
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
