const centerModel = require("../models/centerModel");

const centerController = {
    getAll: async function(req, res) {
        let centers = await centerModel.getCenters();
        res.status(200).json(centers);
    },

    getById: async function(req, res) {
        let center = await centerModel.getCenterById(req.params.id);
        res.status(200).json(center);
    },

    getByEmail: async function(req, res) {
        let center = await centerModel.getCenterByEmail(req.params.email);
        res.status(200).json(center);
    },

    add: async function(req, res) {
        let addedCenter = await centerModel.addCenter(req.body);
        res.status(201).json(addedCenter);
    },

    edit: async function(req, res) {
        let editedCenter = await centerModel.editCenter(req.params.id, req.body);
        res.status(200).json(editedCenter);
    },

    delete: async function(req, res) {
        let deletedCenter = await centerModel.deleteCenter(req.params.id);
        res.status(200).json(deletedCenter);
    },
};

module.exports = centerController;