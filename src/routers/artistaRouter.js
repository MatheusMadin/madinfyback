import express from 'express'
import listAll from '../controllers/artista/listAll.js'
import getById from '../controllers/artista/getById.js'
import create from '../controllers/artista/create.js'
import update from '../controllers/artista/update.js'
import remove from '../controllers/artista/remove.js'

const router = express.Router()

router.get('/', listAll)
router.get('/:id', getById)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)


export default router