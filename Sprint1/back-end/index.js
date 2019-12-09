//git config user.email"tu@email.com"
//git config user.name"tunombre"

const express = require("express");
const cors = require("cors");
require("dotenv").config();

require("./functions/database");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/cities")); //Poner siempre el /api en el insomnia!
app.use("/api", require("./routes/itineraries"));
app.listen(process.env.PORT, () =>
    console.log("Listening on PORT " + process.env.PORT)
);