import express from 'express';
import { createUser, deleteAllUsers, deleteUser, getAllUser, getByIDUser, updatedUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/checkauthentication', verifyToken, (req, res, next) => {
  res.send('Hello user, you are logged in.');
});

router.get('/checkuser/:id', verifyUser, (req, res, next) => {
  res.send('Hello user, you are logged in and you can delete your account.');
});

router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
  res.send('Hello admin, you are logged in and you can delete all accounts.');
});

//update
// router.put("/:id",verifyUser, updatedUser)
router.put('/:id', updatedUser);

//delete
router.delete('/:id', verifyUser, deleteUser);

//delete all
router.delete('/', deleteAllUsers);

//get
router.get('/:id', verifyUser, getByIDUser);

//get all
// router.get("/", verifyAdmin, getAllUser)
router.get('/', getAllUser);

export default router;
