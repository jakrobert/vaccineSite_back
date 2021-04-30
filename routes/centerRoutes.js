const express = require("express");
const centerRouter = express.Router();

const centerController = require("../controllers/centerController");

centerRouter.get("/", centerController.getAll);

centerRouter.get("/:id", centerController.getById);

centerRouter.get("/email/:email", centerController.getByEmail);

centerRouter.post("/", centerController.add);

centerRouter.put("/:id", centerController.edit);

centerRouter.delete("/:id", centerController.delete);


module.exports = centerRouter;