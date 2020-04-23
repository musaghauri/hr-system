import express from 'express';
import authRoutes from './auth';
import roleRoutes from './role';
import permissionRoutes from './permission';
import countryRoutes from './country';
import stateRoutes from './state';
import assetRoutes from './asset';
import cityRoutes from './city';
import priorityRoutes from './priority';
import announcementRoutes from './announcement';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'));
router.use('/auth', authRoutes);
router.use('/roles', roleRoutes);
router.use('/permissions', permissionRoutes);
router.use('/roles', roleRoutes);
router.use('/countries', countryRoutes);
router.use('/states', stateRoutes);
router.use('/assets', assetRoutes);
router.use('/cities', cityRoutes);
router.use('/priorities', priorityRoutes);
router.use('/announcements', announcementRoutes);

export default router;
