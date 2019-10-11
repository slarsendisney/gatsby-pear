const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const compression = require("compression");

const dev = !(process.env.NODE_ENV === "production");

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(compression());
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());

app.get("/hello", function(req, res) {
  res.send({ message: "🍐 Hello from the server!" });
});

if (dev) {
  require("dotenv").config();
  const proxy = require("http-proxy-middleware");
  app.use(
    proxy({
      target: "http://localhost:5051",
      changeOrigin: true,
      ws: true
    })
  );
}

const server = http.createServer(app);

const port = 3000;
server.listen(port, () =>
  console.log(`🍐 Up and running on http://localhost:${port}`)
);
