import express from 'express';
import authCtrl from '../controllers/auth';

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/login')
  /** POST /api/auth/login - Login user */
  .post(authCtrl.login);

router
  .route('/forgot-password')
  /** POST /api/auth/forgot-password - Forgot Password */
  .post(authCtrl.forgotPassword);

router
  .route('/reset-password')
  /** POST /api/auth/reset-password - Reset Password */
  .post(authCtrl.resetPassword);

export default router;
