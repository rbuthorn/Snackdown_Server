const express = require("express")
const router = express.Router()
const controller = require("../controller")

router.get("/PVPOpponents", controller.pvpOpponents)
router.get("/guilds", controller.guilds)
router.get("/friends", controller.friends)
router.get("/leaderboards", controller.leaderboards)

module.exports = router