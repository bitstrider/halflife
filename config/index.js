const nodeEnv = process.env.NODE_ENV || "development"
process.env.NODE_ENV = nodeEnv

const path = `./config/${nodeEnv}.json`

const dotenvJSON = require("dotenv-json")
dotenvJSON({path})

console.info("Loading", nodeEnv, "configurations")

module.exports = process.env
