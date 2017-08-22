const express = require('express')
const router = express('Router')
const bookController = require('../controllers/books')

router.get('/', bookController.getAllBook)
router.get('/:id', bookController.findBookId)
router.post('/', bookController.createBook)
router.delete('/:id', bookController.deleteBook)
router.put('/:id', bookController.updateBook)

module.exports = router
