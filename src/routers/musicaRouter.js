import express from 'express'
import listAll from '../controllers/musica/listAll.js'
import getById from '../controllers/musica/getById.js'
import create from '../controllers/musica/create.js'
import update from '../controllers/musica/update.js'
import remove from '../controllers/musica/remove.js'

const router = express.Router()

router.get('/', listAll)
router.get('/:id', getById)
router.post('/', create)
router.put('/', update)
router.delete('/:id', remove)


export default router