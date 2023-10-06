import express from 'express';
import {getAllDatos, getApdz, createApdz, UpdateApdz, DeleteApdz} from '../controllers/controlAprendiz.js'


const router= express.Router();



router.get('/', getAllDatos);
router.get('/:id',getApdz);
router.post('/',createApdz);
router.put('/:id',UpdateApdz);
router.delete('/:id',DeleteApdz);


export default router;