import express from 'express'
import ContatoController from '../controllers/contato.controller.js'

const router = express.Router()

router.get('/', ContatoController.index)

export default router