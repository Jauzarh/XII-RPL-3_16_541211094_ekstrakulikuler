const express = require('express')
const router = express.Router()

const usercontroller = require('../controller/users')
  
router.get('/users', usercontroller.index)

router.get('/users/:id', usercontroller.show)

router.post('/users', usercontroller.store)

router.put('/users/:id', usercontroller.update)

router.delete('/users/:id', usercontroller.delete)

  module.exports = router