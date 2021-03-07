import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Fabrica from '../models/fabModel.js'

// @desc Fetch all fabs 
// @route GET /api/fabs
// @access Public


router.get('/', asyncHandler(async (req, res) => {
    const fabs = await Fabrica.find({})
    res.json(fabs)
}))

// @desc Fetch single products 
// @route GET /api/fabs/:id
// @access Public

router.get('/:id', asyncHandler(async (req, res) => {
    const fabs = await Fabrica.findById(req.params.id)

    if(fabs) {

        res.json(fabs)
    } else {
        res.status(404).json({ message: 'Fabrica no encontrada' })
    }

    
}))

export default router


