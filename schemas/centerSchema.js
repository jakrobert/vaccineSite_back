const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const centerSchema = new Schema(
    {
        name: { type: String, required: true },
        oras: { type: String, required: true },
        judet: { type: String, required: true },
        strada: { type: String, required: true },
        vaccineType: {type: String, required: true},
        appointmentList: {type: Array, default: []},
        numberOfVaccines: {type: String, required: true},
        email: { type: String, required: true },
        password: { type: String, required: true },
      },
      {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
      }
);
centerSchema.virtual("location").get(function () {
  return this.oras + " " + this.judet + " " + this.strada;
});
centerSchema.virtual("vaccine").get(function () {
  return this.vaccineType + " " + this.numberOfVaccines;
});

module.exports = mongoose.model("Center", centerSchema);

