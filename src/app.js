const express = require("express");

const app = express();

// init pup
require("./service/pup/browser");

// middleware

// routes
app.use(require("./routes/router"));

app.listen(3000, (err) => {
  if (err) console.log("error: ", err);
  else console.log("server is running");
});
