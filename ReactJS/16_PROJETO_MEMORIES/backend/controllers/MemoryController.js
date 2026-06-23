"use strict";

const MemoryModel = require("../models/Memory");
const fs = require("fs");

const deleteImageFile = (memory) => {
  fs.unlink(`public/${memory.src}`, (err) => {
    if (err) {
      console.error(`Erro ao deletar arquivo de imagem: ${err.message}`);
    } else {
      console.log(`Arquivo de imagem ${memory.src} deletado com sucesso.`);
    }
  });
};

// createMemory
const createMemory = async (req, res) => {
  try {
    const { title, description, favorite } = req.body;
    const src = `images/${req.file.filename}`;

    if (
      !title ||
      title === undefined ||
      title === "undefined" ||
      !description ||
      description === undefined ||
      description === "undefined"
    ) {
      if (src) {
        deleteImageFile({ src });
      }

      return res
        .status(400)
        .json({ error: "Por favor, preencha todos os campos." });
    }

    const newMemory = new MemoryModel({ title, src, description, favorite });

    await newMemory.save();

    res
      .status(200)
      .json({ message: "Memória criada com sucesso", memory: newMemory });
  } catch (error) {
    const errorMessage = `Erro ao criar memória: ${error.message}`;
    console.error(errorMessage);
    res.status(500).json({ error: errorMessage });
  }
};

// getMemories
const getMemories = async (req, res) => {
  try {
    const memories = await MemoryModel.find();

    res.status(200).json(memories);
  } catch (error) {
    const errorMessage = `Erro ao buscar memórias: ${error.message}`;
    console.error(errorMessage);
    res.status(500).json({ error: errorMessage });
  }
};

// getMemoryById
const getMemoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const memory = await MemoryModel.findById(id);

    if (!memory) {
      return res.status(404).json({ error: "Memória não encontrada." });
    }

    res.status(200).json(memory);
  } catch (error) {
    const errorMessage = `Erro ao buscar memória ${req.params.id}: ${error.message}`;
    console.error(errorMessage);
    res.status(500).json({ error: errorMessage });
  }
};

// deleteMemory
const deleteMemory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMemory = await MemoryModel.findByIdAndDelete(id);

    if (!deletedMemory) {
      return res.status(404).json({ error: "Memória não encontrada." });
    }

    deleteImageFile(deletedMemory);

    res
      .status(200)
      .json({ message: "Memória deletada com sucesso", memory: deletedMemory });
  } catch (error) {
    const errorMessage = `Erro ao deletar memória ${req.params.id}: ${error.message}`;
    console.error(errorMessage);
    res.status(500).json({ error: errorMessage });
  }
};

// updateMemory
const updateMemory = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    let src = null;

    if (req.file) {
      src = `images/${req.file.filename}`;
    }

    const oldMemory = await MemoryModel.findById(id);

    if (!oldMemory) {
      return res.status(404).json({ error: "Memória não encontrada." });
    }

    if (src) {
      deleteImageFile(oldMemory);
    }

    const updatedData = {};

    if (title) updatedData.title = title;
    if (description) updatedData.description = description;
    if (src) updatedData.src = src;

    const updatedMemory = await MemoryModel.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    res.status(200).json({
      message: "Memória atualizada com sucesso",
      memory: updatedMemory,
    });
  } catch (error) {
    const errorMessage = `Erro ao atualizar memória ${req.params.id}: ${error.message}`;
    console.error(errorMessage);
    res.status(500).json({ error: errorMessage });
  }
};

// toggleFavorite
const toggleFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    const memory = await MemoryModel.findById(id);

    if (!memory) {
      return res.status(404).json({ error: "Memória não encontrada." });
    }

    memory.favorite = !memory.favorite;
    await memory.save();

    res.status(200).json({
      message: memory.favorite
        ? "Memória adicionada aos favoritos com sucesso"
        : "Memória removida dos favoritos com sucesso",
      memory,
    });
  } catch (error) {
    const errorMessage = `Erro ao atualizar memória ${req.params.id}: ${error.message}`;
    console.error(errorMessage);
    res.status(500).json({ error: errorMessage });
  }
};

// addComment
const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, text } = req.body;

    if (!name || !text) {
      return res
        .status(400)
        .json({ error: "Por favor, preencha todos os campos do comentário." });
    }

    const newComment = { name, text };

    const memory = await MemoryModel.findById(id);

    if (!memory) {
      return res.status(404).json({ error: "Memória não encontrada." });
    }

    memory.comments.push(newComment);
    await memory.save();

    res.status(200).json({
      message: "Comentário adicionado com sucesso",
      memory,
    });
  } catch (error) {
    const errorMessage = `Erro ao adicionar comentário à memória ${req.params.id}: ${error.message}`;
    console.error(errorMessage);
    res.status(500).json({ error: errorMessage });
  }
};

module.exports = {
  createMemory,
  getMemories,
  getMemoryById,
  deleteMemory,
  updateMemory,
  toggleFavorite,
  addComment,
};
