import express from 'express';
import expressJwt from 'express-jwt';
import { JWT_SECRET_TOKEN } from '@config';
import branchCtrl from '../controllers/branch';

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** POST /api/branches - Create new branch */
  .post(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    branchCtrl.create
  )
  /** GET /api/branches - Get list of branches */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    branchCtrl.list
  );

router
  .route('/:branchId')
  /** GET /api/branches/:branchId - Get branch */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    branchCtrl.get
  )
  /** PUT /api/branches/:branchId - Update branch */
  .put(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    branchCtrl.update
  )
  /** DELETE /api/branches/:branchId - Delete branch */
  .delete(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    branchCtrl.removeHard
  );

export default router;
