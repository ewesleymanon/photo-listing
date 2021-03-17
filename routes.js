const express = require('express')
const router = express.Router()

// .../api/v1/photos
router.use('/photos', require('./controllers/v1/photoController'))

module.exports = router