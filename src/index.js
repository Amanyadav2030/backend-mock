const express = require('express')
const dbConnect = require('./config/db')
const {PlayerRouter} = require('./routes/index');
const cors = require('cors');
const PORT = process.env.PORT || 8080
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use("/player", PlayerRouter)
app.get('/', (req, res) => res.send('hello'))

app.listen(PORT, async() => {
    await dbConnect();
    console.log('server started on port 8080')}
)