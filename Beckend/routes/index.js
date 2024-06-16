import express from 'express';
import { getUsers, Register, Login, Logout } from '../controllers/Users.js';
import { authenticateToken, authorizeAdmin } from '../middleware/authMiddleware.js';
import { verifyToken } from '../middleware/VerifyToken.js';
import { refreshToken } from '../controllers/RefreshToken.js';

const router = express.Router();

router.get('/users', verifyToken, authenticateToken, authorizeAdmin, getUsers);
router.post('/users', Register);
router.post('/login', Login); 
router.get('/token', refreshToken);
router.delete('/logout', Logout);

export default router;
