const express = require('express')
const router = express.Router()

const { getPeople, createPerson,putPeople, deletePeople } = require('../controllers/people')


router.route('/').get(getPeople).post(createPerson)
router.route('/:id').put(putPeople).delete(deletePeople)

module.exports = router

