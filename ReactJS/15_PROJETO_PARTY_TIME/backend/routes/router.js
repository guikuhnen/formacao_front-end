"use strict";

const router = require("express").Router();

// Service routes
const serviceRouter = require("./service");
router.use("/", serviceRouter);

// Party routes
const partyRouter = require("./parties");
router.use("/", partyRouter);

module.exports = router;
