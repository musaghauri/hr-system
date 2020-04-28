import express from 'express';
import expressJwt from 'express-jwt';
import { JWT_SECRET_TOKEN } from '@config';
import departmentCtrl from '../controllers/department';

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** POST /api/departments - Create new department */
  .post(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    departmentCtrl.create
  )
  /** GET /api/departments - Get list of departments */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    departmentCtrl.list
  );

router
  .route('/:departmentId')
  /** GET /api/departments/:departmentId - Get department */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    departmentCtrl.get
  )
  /** PUT /api/departments/:departmentId - Update department */
  .put(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    departmentCtrl.update
  )
  /** DELETE /api/departments/:departmentId - Delete department */
  .delete(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    departmentCtrl.removeHard
  );

export default router;
