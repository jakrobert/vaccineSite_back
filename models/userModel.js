const usersDB = require("../schemas/userSchema");

const userModel = {
    getAllUsers: async function() {
        return await usersDB.find();
    },

    getUserById: async function(id) {
        return await usersDB.findById(id);
    },

    getUserByEmail: async function(email) {
        return await usersDB.find({ email: email });
    },

    // daca nu merge, aici ar trebui sa fie modificat (nu am putut testa)
    getCentersByUserId: async function(id) {
        return await usersDB
            .findById(id)
            .populate({
                path: "centers",
                select: "name",
            })
    },

    addUser: async function(user) {
        return await usersDB.create(user);
    },

    editUser: async function(id, user) {
        return await usersDB.findByIdAndUpdate(id, user, { new: true });
    },

    deleteUser: async function(id) {
        let { deletedCount } = await usersDB.deleteOne({ _id: id });
        return deletedCount;
    },

};

module.exports = userModel;