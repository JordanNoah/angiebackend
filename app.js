require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000

const db = require('./app/models')

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/api/v1',require('./app/routes'))

db.sequelize.sync({
    force:true
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Escuchando en el puerto *:${PORT}`);
    })
})