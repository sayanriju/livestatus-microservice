const cuid = require("cuid")
const Faye = require("faye")
const faye = new Faye.Client(process.env.BASE_URL || "http://localhost:3000/")
const log = require("book")

const userId = process.argv[2] || cuid.slug()

log.info(`==> User ${userId} logs in.....`)
setInterval(() => {
  faye.publish(`/heartbeat/${userId}`, { timestamp: Date.now() })
}, 5 * 1000)
