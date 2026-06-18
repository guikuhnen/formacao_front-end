"use strict";

const { Service: ServiceModel } = require("../models/Service");

const serviceController = {
  create: async (req, res) => {
    try {
      const { name, description, price, image } = req.body;

      const response = await ServiceModel.create({
        name,
        description,
        price,
        image,
      });

      res.status(201).json({ response, msg: "Service created successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to create service" });
    }
  },
  getAll: async (req, res) => {
    try {
      const response = await ServiceModel.find();

      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to retrieve services" });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;

      const response = await ServiceModel.findById(id);

      if (!response) {
        return res.status(404).json({ error: "Service not found" });
      }

      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to retrieve service" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };

      const updatedService = await ServiceModel.findByIdAndUpdate(id, service);

      if (!updatedService) {
        return res.status(404).json({ error: "Service not found" });
      }

      res.status(200).json({ service, msg: "Service updated successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to update service" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const response = await ServiceModel.findById(id);

      if (!response) {
        return res.status(404).json({ error: "Service not found" });
      }

      const deletedService = await ServiceModel.findByIdAndDelete(id);

      res
        .status(200)
        .json({ deletedService, msg: "Service deleted successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to delete service" });
    }
  },
};

module.exports = serviceController;
