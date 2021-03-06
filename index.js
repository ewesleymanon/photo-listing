const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan('dev'))


app.get('/', (req, res) => {
  res.json({success: 'success'})
})

const PORT = process.env.port || 9005
app.use('/api/v1', routes) 


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)) 


