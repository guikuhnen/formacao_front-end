"use strict";

const router = require("express").Router();
const upload = require("../helpers/upload");

//#region MemoryController
const {
  createMemory,
  getMemories,
  getMemoryById,
  deleteMemory,
  updateMemory,
  toggleFavorite,
  addComment,
} = require("../controllers/MemoryController");

// createMemory
router.post(
  "/",
  upload.single("image"),
  (req, res, next) => {
    const image = req.file;

    if (!image) {
      return res.status(400).json({ error: "Por favor, envie uma imagem." });
    }

    next();
  },
  (req, res) => createMemory(req, res),
);

// getMemories
router.get("/", (req, res) => getMemories(req, res));

// getMemoryById
router.get("/:id", (req, res) => getMemoryById(req, res));

// deleteMemory
router.delete("/:id", (req, res) => deleteMemory(req, res));

// updateMemory
router.patch("/:id", upload.single("image"), (req, res) =>
  updateMemory(req, res),
);

// toggleFavorite
router.patch("/favorite/:id", (req, res) => toggleFavorite(req, res));

// addComment
router.patch("/:id/comment", (req, res) => addComment(req, res));
//#endregion

module.exports = router;
