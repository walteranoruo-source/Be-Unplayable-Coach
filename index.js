const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("⚽ Hello from CoachOS! Your deployment works!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
