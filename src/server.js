const express = require("express");
const cors = require("cors");

const app = express();

//Routes
const routerUser = require("./routes/user.route");
const routerAuth = require("./routes/auth.route");
const routerPost = require("./routes/post.route");

//JSON Middleware
app.use(cors());
app.use(express.json());

app.use("/users", routerUser);
app.use("/auth", routerAuth);

app.use("/post", routerPost);

//Export
module.exports = app