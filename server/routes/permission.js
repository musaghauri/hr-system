import express from 'express';
import expressJwt from 'express-jwt';
import { JWT_SECRET_TOKEN } from '@config';
import permissionCtrl from '../controllers/permission';

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** POST /api/permissions - Create new permission */
  .post(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    permissionCtrl.create
  )
  /** GET /api/permissions - Get list of permissions */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    permissionCtrl.list
  );

router
  .route('/:permissionId')
  /** GET /api/permissions/:permissionId - Get permission */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    permissionCtrl.get
  )
  /** PUT /api/permissions/:permissionId - Update permission */
  .put(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    permissionCtrl.update
  )
  /** DELETE /api/permissions/:permissionId - Delete permission */
  .delete(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    permissionCtrl.removeHard
  );

export default router;
