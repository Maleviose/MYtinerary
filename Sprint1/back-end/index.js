const express = require('express')
const cors = require('cors')
require('dotenv').config()

require('./functions/database')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', require('./routes/cities'))
app.listen(process.env.PORT, () => console.log("Listening on PORT" + process.env.PORT))