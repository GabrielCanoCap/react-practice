const app = require("./app");
const { logger } = require("infrastructure");

const port = process.env.port || 3001;

app.listen(port, () => {
    logger.info(`Express server sarted on port ${port}`);
})