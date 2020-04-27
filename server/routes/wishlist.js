import express from 'express';
import expressJwt from 'express-jwt';
import { JWT_SECRET_TOKEN } from '@config';
import wishlistCtrl from '../controllers/wishlist';

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** POST /api/wishlist - Create new wishlist */
  .post(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    wishlistCtrl.create
  )
  /** GET /api/wishlist - Get list of wishlist */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    wishlistCtrl.list
  );

router
  .route('/:wishlistId')
  /** GET /api/wishlist/:wishlistId - Get wishlist */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    wishlistCtrl.get
  )
  /** PUT /api/wishlist/:wishlistId - Update wishlist */
  .put(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    wishlistCtrl.update
  )
  /** DELETE /api/wishlist/:wishlistId - Delete wishlist */
  .delete(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    wishlistCtrl.removeHard
  );

export default router;
