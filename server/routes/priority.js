import express from 'express';
import expressJwt from 'express-jwt';
import { JWT_SECRET_TOKEN } from '@config';
import priorityCtrl from '../controllers/priority';

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** POST /api/priorities - Create new priority */
  .post(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    priorityCtrl.create
  )
  /** GET /api/priorities - Get list of priorities */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    priorityCtrl.list
  );

router
  .route('/:priorityId')
  /** GET /api/priorities/:priorityId - Get priority */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    priorityCtrl.get
  )
  /** PUT /api/priorities/:priorityId - Update priority */
  .put(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    priorityCtrl.update
  )
  /** DELETE /api/priorities/:priorityId - Delete priority */
  .delete(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    priorityCtrl.removeHard
  );

export default router;
