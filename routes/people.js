const express = require('express')
const router = express.Router()
const { getPeople, createPerson,putPeople, deletePeople } = require('../controllers/people')
router.get('/',getPeople)
router.post('/',createPerson)
router.put('/:id',putPeople)
router.delete('/:id',deletePeople)

module.exports = router

