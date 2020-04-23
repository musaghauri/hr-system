import express from 'express';
import expressJwt from 'express-jwt';
import { JWT_SECRET_TOKEN } from '@config';
import announcementCtrl from '../controllers/announcement';

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** POST /api/announcements - Create new announcement */
  .post(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    announcementCtrl.create
  )
  /** GET /api/announcements - Get list of announcements */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    announcementCtrl.list
  );

router
  .route('/:announcementId')
  /** GET /api/announcements/:announcementId - Get announcement */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    announcementCtrl.get
  )
  /** PUT /api/announcements/:announcementId - Update announcement */
  .put(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    announcementCtrl.update
  )
  /** DELETE /api/announcements/:announcementId - Delete announcement */
  .delete(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    announcementCtrl.removeHard
  );

export default router;
