const router = require("express").Router();

const name = require("./name");

router.use("/", name);

module.exports = router;
