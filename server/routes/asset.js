import express from 'express';
import expressJwt from 'express-jwt';
import { JWT_SECRET_TOKEN } from '@config';
import assetCtrl from '../controllers/asset';

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** POST /api/assets - Create new asset */
  .post(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    assetCtrl.create
  )
  /** GET /api/assets - Get list of assets */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    assetCtrl.list
  );

router
  .route('/:assetId')
  /** GET /api/assets/:assetId - Get asset */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    assetCtrl.get
  )
  /** PUT /api/assets/:assetId - Update asset */
  .put(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    assetCtrl.update
  )
  /** DELETE /api/assets/:assetId - Delete asset */
  .delete(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    assetCtrl.removeHard
  );

export default router;
