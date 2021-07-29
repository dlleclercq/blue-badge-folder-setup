let express = require("express");
let app = express();
var testController = require('./controllers/testcontroller');
var calcController = require("./controllers/calculatorController");

app.use(express.json());

app.use("/test", testController);

app.use("/calculator", calcController)
app.listen(3000, function(){
    console.log("App is listening on port 3000");
});
