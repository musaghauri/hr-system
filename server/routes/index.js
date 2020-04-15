import express from 'express';
import authRoutes from './auth';
import roleRoutes from './role';
import permissionRoutes from './permission';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'));
router.use('/auth', authRoutes);
router.use('/roles', roleRoutes);
router.use('/permissions', permissionRoutes);

export default router;
