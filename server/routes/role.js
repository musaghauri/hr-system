import express from 'express';
import roleCtrl from '../controllers/role';

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** POST /api/roles - Create new role */
  .post(roleCtrl.create)
  /** GET /api/roles - Get list of roles */
  .get(roleCtrl.list);

router
  .route('/:roleId')
  /** GET /api/roles/:roleId - Get role */
  .get(roleCtrl.get)
  /** PUT /api/roles/:roleId - Update role */
  .put(roleCtrl.update);

export default router;
