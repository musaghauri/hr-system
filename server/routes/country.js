import express from 'express';
import expressJwt from 'express-jwt';
import { JWT_SECRET_TOKEN } from '@config';
import countryCtrl from '../controllers/country';

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** POST /api/countries - Create new country */
  .post(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    countryCtrl.create
  )
  /** GET /api/countries - Get list of countries */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    countryCtrl.list
  );

router
  .route('/:countryId')
  /** GET /api/countries/:countryId - Get country */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    countryCtrl.get
  )
  /** PUT /api/countries/:countryId - Update country */
  .put(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    countryCtrl.update
  )
  /** DELETE /api/countries/:countryId - Delete country */
  .delete(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    countryCtrl.removeHard
  );

export default router;
