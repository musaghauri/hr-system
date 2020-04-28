import express from 'express';
import expressJwt from 'express-jwt';
import { JWT_SECRET_TOKEN } from '@config';
import roleCtrl from '../controllers/role';

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** POST /api/roles - Create new role */
  .post(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    roleCtrl.create
  )
  /** GET /api/roles - Get list of roles */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    roleCtrl.list
  );

router
  .route('/:roleId')
  /** GET /api/roles/:roleId - Get role */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    roleCtrl.get
  )
  /** PUT /api/roles/:roleId - Update role */
  .put(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    roleCtrl.update
  )
  /** DELETE /api/roles/:roleId - Delete role */
  .delete(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    roleCtrl.removeHard
  );

export default router;
