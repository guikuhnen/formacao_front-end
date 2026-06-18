"use strict";

const PartyModel = require("../models/Party");

function checkPartyBudgetIsSufficient(budget, services) {
  const totalServicesCost = services.reduce(
    (sum, service) => sum + service.price,
    0,
  );

  if (totalServicesCost > budget) {
    return false; // Budget exceeded
  }

  return true; // Budget is sufficient
}

const partyController = {
  create: async (req, res) => {
    try {
      const { title, author, description, budget, image, services } = req.body;

      if (services && !checkPartyBudgetIsSufficient(budget, services)) {
        res
          .status(406)
          .json({ msg: "Budget is insufficient for the selected services" });
        return;
      }

      const response = await PartyModel.create({
        title,
        author,
        description,
        budget,
        image,
        services,
      });

      res.status(201).json({ response, msg: "Party created successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to create party" });
    }
  },
  getAll: async (req, res) => {
    try {
      const response = await PartyModel.find();

      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to retrieve parties" });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;

      const response = await PartyModel.findById(id);

      if (!response) {
        return res.status(404).json({ error: "Party not found" });
      }

      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to retrieve party" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services,
      };

      if (
        party.services &&
        !checkPartyBudgetIsSufficient(party.budget, party.services)
      ) {
        res
          .status(406)
          .json({ msg: "Budget is insufficient for the selected services" });
        return;
      }

      const updatedParty = await PartyModel.findByIdAndUpdate(id, party);

      if (!updatedParty) {
        return res.status(404).json({ error: "Party not found" });
      }

      res.status(200).json({ updatedParty, msg: "Party updated successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to update party" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const response = await PartyModel.findById(id);

      if (!response) {
        return res.status(404).json({ error: "Party not found" });
      }

      const deletedParty = await PartyModel.findByIdAndDelete(id);

      res.status(200).json({ deletedParty, msg: "Party deleted successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to delete party" });
    }
  },
};

module.exports = partyController;
