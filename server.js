const express = require("express");
const cors = require("cors");
const entities_route = require("./routes/entity");

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

app.use("/entity", entities_route);

app.listen(port, () => console.log(`Started on port ${port}`));
