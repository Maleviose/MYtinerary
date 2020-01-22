//git config user.email"tu@email.com"
//git config user.name"tunombre"

//express
const express = require("express");
const app = express();

//imports
const cors = require("cors");
require("dotenv").config();
require("./functions/database");
require('./passport');
const passportSetup = require("./passport")
const bodyParser = require('body-parser')


//middleware
app.use(cors());
app.use(express.json());
app.use(passportSetup.initialize())

//routes
app.use("/api", require("./routes/cities")); //Poner siempre el /api en el insomnia!
app.use("/api", require("./routes/itineraries"));
app.use("/api", require("./routes/activities"));
app.use("/api", require("./routes/createUsers"));
app.use("/api", require("./routes/login"));
app.use(bodyParser.json())

//server
app.listen(process.env.PORT, () =>
    console.log("Listening on PORT " + process.env.PORT)
);