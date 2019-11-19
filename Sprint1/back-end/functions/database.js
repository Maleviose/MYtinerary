const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const conexion = mongoose.connection
conexion.once('open', () => console.log('Connected to DB...'))