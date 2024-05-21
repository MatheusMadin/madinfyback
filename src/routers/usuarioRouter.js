import express from 'express'
import listAll from '../controllers/usuario/listAll.js'
import getById from '../controllers/usuario/getById.js'
import create from '../controllers/usuario/create.js'
import update from '../controllers/usuario/update.js'
import remove from '../controllers/usuario/remove.js'

const router = express.Router()

router.get('/', listAll)
router.get('/:id', getById)
router.post('/', create)
router.put('/', update)
router.delete('/:id', remove)
router.put('/:id', update)



export default router