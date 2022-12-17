const express = require("express");
const cors = require("cors");
const participant_route = require("./routes/participant");
const resource_route = require("./routes/resource");
const supply_route = require("./routes/supply");
const unit_route = require("./routes/unit");
const creator_route = require("./routes/creator");

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  next();
  console.log(req.method, req.url, res.statusCode);
});

app.use("/participant", participant_route);
app.use("/resource", resource_route);
app.use("/supply", supply_route);
app.use("/creator", creator_route);
app.use("/unit", unit_route);

app.listen(port, () => console.log(`Started on port ${port}`));
