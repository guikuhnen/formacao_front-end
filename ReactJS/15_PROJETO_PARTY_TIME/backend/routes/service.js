"use strict";

const router = require("express").Router();
const serviceController = require("../controllers/serviceController");

//#region Routes for services
// create
router.route("/services").post(serviceController.create);

// getAll
router.route("/services").get(serviceController.getAll);

// getById
router.route("/services/:id").get(serviceController.getById);

// update
router.route("/services/:id").put(serviceController.update);

// delete
router.route("/services/:id").delete(serviceController.delete);
//#endregion

module.exports = router;
