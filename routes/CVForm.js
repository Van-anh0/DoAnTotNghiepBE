import express from 'express';
import { createCVForm, deleteAllCVForms, deleteCVForm, filterCVFormByType, getAllCVForm } from '../controllers/CVForm.js';

const router = express.Router();
//CREATE
router.post('/', createCVForm);
//lọc cvform theo type
router.post('/filter', filterCVFormByType);


//DELETE
router.delete('/:id', deleteCVForm);

//DELETE ALL
router.delete('/', deleteAllCVForms);

//GET ALL
router.get('/', getAllCVForm);



export default router;