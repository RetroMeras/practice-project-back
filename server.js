const express = require("express");
const cors = require("cors");
const entity_route = require("./routes/entity");
const relation_route = require("./routes/relation");

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

app.use("/entity", entity_route);
app.use("/relation", relation_route);

app.listen(port, () => console.log(`Started on port ${port}`));
