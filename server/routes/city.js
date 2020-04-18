import express from 'express';
import expressJwt from 'express-jwt';
import { JWT_SECRET_TOKEN } from '@config';
import cityCtrl from '../controllers/city';

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** POST /api/cities - Create new city */
  .post(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    cityCtrl.create
  )
  /** GET /api/cities - Get list of cities */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    cityCtrl.list
  );

router
  .route('/:cityId')
  /** GET /api/cities/:cityId - Get city */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    cityCtrl.get
  )
  /** PUT /api/cities/:cityId - Update city */
  .put(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    cityCtrl.update
  )
  /** DELETE /api/cities/:cityId - Delete city */
  .delete(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    cityCtrl.removeHard
  );

export default router;
