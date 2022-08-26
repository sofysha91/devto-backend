const express = require("express");
const cors = require("cors");

const app = express();

//Routes
const routerKoder = require("./routes/koder.route");
const routerMentor = require("./routes/mentor.route");
const routerGeneration = require("./routes/generation.route");
const routerUser = require("./routes/user.route");
const routerAuth = require("./routes/auth.route");

//JSON Middleware
app.use(cors());
app.use(express.json());

app.use("/koders", routerKoder);
app.use("/mentors", routerMentor);
app.use("/generations", routerGeneration);
app.use("/users", routerUser);
app.use("/auth", routerAuth);

//Export
module.exports = app