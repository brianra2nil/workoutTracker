const router = require('express').Router()

router.use('/api', require('./exerciseRoutes.js'))


module.exports = router
