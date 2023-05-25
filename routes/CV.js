import express from 'express';
import {
  createCV,
  deleteAllCVs,
  deleteCV,
  getAllCV,
  getByEmailCV,
  getByIDCV,
  getCVsByAuthorMail,
  updatedCV,
} from '../controllers/CV.js';

const router = express.Router();

//CREATE
router.post('/', createCV);
//lọc tất cả cv theo authorMail được đưa dữ liệu vào body
router.post('/filter/author-mail', getCVsByAuthorMail);

//UPDATE
router.put('/:id', updatedCV);

//DELETE
router.delete('/:id', deleteCV);

//DELETE ALL
router.delete('/', deleteAllCVs);

//GET
router.get('/:id', getByIDCV);
router.get('/get-one/:email', getByEmailCV);

//GET ALL
router.get('/', getAllCV);

export default router;
