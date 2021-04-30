const userModel = require("../models/userModel");

const userController = {
    getAll: async function(req, res) {
        let users;
        users = await userModel.getAllUsers();
        res.status(200).json(users);
    },

    getById: async function(req, res) {
        let user = await userModel.getUserById(req.params.id);
        res.status(200).json(user);
    },

    getByEmail: async function(req, res) {
        let user = await userModel.getUserByEmail(req.params.email);
        res.status(200).json(user);
    },

    getCenters: async function(req, res) {
        let user = await userModel.getCentersByUserId(req.params.id);
        res.status(200).json(user);
    },

    add: async function(req, res) {
        let addedUser = await userModel.addUser(req.body);
        console.log(req.body);
        res.status(201).json(addedUser);

    },

    edit: async function(req, res) {
        let editedUser = await userModel.editUser(req.params.id, req.body);
        res.status(200).json(editedUser);
    },

    delete: async function(req, res) {
        let deletedUser = await userModel.deleteUser(req.params.id);
        res.status(200).json(deletedUser);
    },
};

module.exports = userController;