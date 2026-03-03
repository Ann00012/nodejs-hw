import { Router } from 'express';
import { celebrate } from 'celebrate';
import { registerUser,loginUser, logoutUser, refreshUserSession } from '../controllers/AuthController.js';
import { registerUserSchema, loginUserSchema } from '../validations/AuthValidation.js';


const router = Router();

router.post('/auth/register', celebrate(registerUserSchema), registerUser);
router.post('/auth/login', celebrate(loginUserSchema), loginUser);
router.post('/auth/logout', logoutUser);
router.post('/auth/refresh', refreshUserSession);

export default router;
