const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const centerRoutes = require("./routes/centerRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("It's working"));

app.use("/centers", centerRoutes);
app.use("/users", userRoutes);

const URI = 'mongodb+srv://JakRo:JakRo@cluster0.enok2.mongodb.net/VaccinareEESTEC?retryWrites=true&w=majority';
// const URI = 'mongodb+srv://razvan:razvan@cluster0.n7uqt.mongodb.net/vaccineCenter?retryWrites=true&w=majority';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose
    .connect(URI, options)
    .then(() => {
        console.log("server is uppppppp!");
        app.listen(4000);
    });