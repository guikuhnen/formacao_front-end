"use strict";

const router = require("express").Router();
const partyController = require("../controllers/partyController");

//#region Routes for parties
// create
router.route("/parties").post(partyController.create);

// getAll
router.route("/parties").get(partyController.getAll);

// getById
router.route("/parties/:id").get(partyController.getById);

// update
router.route("/parties/:id").put(partyController.update);

// delete
router.route("/parties/:id").delete(partyController.delete);
//#endregion

module.exports = router;
