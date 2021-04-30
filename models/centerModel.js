const centersDB = require("../schemas/centerSchema");

const centerModel = {
    // addUser: async function (center) {
    //     return await centersDB.create(center);
    // },
    getCenters: async function() {
        return await centersDB.find();
    },

    getCenterById: async function(id) {
        return await centersDB.findById(id);
    },

    getCenterByEmail: async function(email) {
        return await centersDB.find({ email: email });
    },

    addCenter: async function(center) {
        return await centersDB.create(center);
    },

    editCenter: async function(id, center) {
        return await centersDB.findByIdAndUpdate(id, center, { new: true });
    },

    deleteCenter: async function(id) {
        let { deletedCount } = await centersDB.deleteOne({ _id: id });
        return deletedCount;
    },
};

module.exports = centerModel;