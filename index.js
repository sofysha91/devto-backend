//DB
//Server
//Route logic
require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./src/server");

const {
    DB_USERNAME, 
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env;

const URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}${DB_NAME}`;

mongoose.connect(URL)
.then(() => {
    console.log("Conectado a MongoDB");
    app.listen(8080, () => {
        console.log("Server listening...");
    });    
})
.catch((error) => {
    console.log("Error", error);
});