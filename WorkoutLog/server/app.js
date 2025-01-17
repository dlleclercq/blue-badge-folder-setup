require("dotenv").config();
let express = require("express");
const app = express();
const sequelize = require("./db");

let user = require("./controllers/userController");
let log = require("./controllers/logController");
sequelize.sync();

app.use(express.json());
app.use("/user", user);

app.use(require('./middleware/validate-session'));
app.use('/log', log);

app.listen(3000, function () {
    console.log("App is listening on port 3000");
})