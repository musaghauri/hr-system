import express from 'express';
import expressJwt from 'express-jwt';
import { JWT_SECRET_TOKEN } from '@config';
import wishCtrl from '../controllers/wish';

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** POST /api/wishlist - Create new wish */
  .post(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    wishCtrl.create
  )
  /** GET /api/wishlist - Get list of wishlist */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    wishCtrl.list
  );

router
  .route('/:wishId')
  /** GET /api/wishlist/:wishId - Get wish */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    wishCtrl.get
  )
  /** PUT /api/wishlist/:wishId - Update wish */
  .put(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    wishCtrl.update
  )
  /** DELETE /api/wishlist/:wishId - Delete wish */
  .delete(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    wishCtrl.removeHard
  );

export default router;
