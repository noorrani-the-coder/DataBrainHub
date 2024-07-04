import express from "express";
import { createUser, deleteUsers, getUsers, getUsersById, updateUser } from "../controllers/Users.js";
import { verifyUser , adminOnly } from "../middleware/authuser.js";

const router = express.Router();

router.get('/users',verifyUser,adminOnly,getUsers);
router.get('/users/:id',verifyUser,adminOnly,getUsersById);
router.post('/users',verifyUser,adminOnly,createUser);
router.patch('/users/:id',verifyUser,adminOnly,updateUser);
router.delete('/users/:id',verifyUser,adminOnly,deleteUsers);


export default router;