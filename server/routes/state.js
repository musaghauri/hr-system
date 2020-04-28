import express from 'express';
import expressJwt from 'express-jwt';
import { JWT_SECRET_TOKEN } from '@config';
import stateCtrl from '../controllers/state';

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** POST /api/states - Create new state */
  .post(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    stateCtrl.create
  )
  /** GET /api/states - Get list of states */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    stateCtrl.list
  );

router
  .route('/:stateId')
  /** GET /api/states/:stateId - Get state */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    stateCtrl.get
  )
  /** PUT /api/states/:stateId - Update state */
  .put(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    stateCtrl.update
  )
  /** DELETE /api/states/:stateId - Delete state */
  .delete(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    stateCtrl.removeHard
  );

export default router;
