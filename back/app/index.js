//Load express module with `require` directive
const express = require('express')
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const cors = require("cors");
const { logger, errorUtils } = require("infrastructure");
const { docRouterInjector } = require("config");

const app = express()
app.use(morgan("combined", { stream: logger.stream }));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

require("./domains/global-router-injector")(app);

//Define request response in root URL (/)
docRouterInjector(app);

app.get('/status', (req, res) => {
  res.send({
    status: "Online",
    version: process.env.npm_package_version
  });
});


app.use(errorUtils.errorHanler);

module.exports = app;