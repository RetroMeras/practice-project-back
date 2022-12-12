const express = require("express");
const cors = require("cors");
const participant_route = require("./routes/participant");
const resource_route = require("./routes/resource");
const product_route = require("./routes/product");
const supply_route = require("./routes/supply");

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
app.use("/product", product_route);
app.use("/supply", supply_route);

app.listen(port, () => console.log(`Started on port ${port}`));
