import express from 'express';
import expressJwt from 'express-jwt';
import { JWT_SECRET_TOKEN } from '@config';
import employeeCtrl from '../controllers/employee';

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** POST /api/employees - Create new employee */
  .post(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    employeeCtrl.create
  )
  /** GET /api/employees - Get list of employees */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    employeeCtrl.list
  );

router
  .route('/:employeeId')
  /** GET /api/employees/:employeeId - Get employee */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    employeeCtrl.get
  )
  /** PUT /api/employees/:employeeId - Update employee */
  .put(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    employeeCtrl.update
  )
  /** DELETE /api/employees/:employeeId - Delete employee */
  .delete(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    employeeCtrl.removeHard
  );

export default router;
