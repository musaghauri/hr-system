import express from 'express';
import expressJwt from 'express-jwt';
import { JWT_SECRET_TOKEN } from '@config';
import projectCtrl from '../controllers/project';

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** POST /api/projects - Create new project */
  .post(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    projectCtrl.create
  )
  /** GET /api/projects - Get list of projects */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    projectCtrl.list
  );

router
  .route('/:projectId')
  /** GET /api/projects/:projectId - Get project */
  .get(
    // expressJwt({
    //   secret: JWT_SECRET_TOKEN,
    // }),
    projectCtrl.get
  )
  /** PUT /api/projects/:projectId - Update project */
  .put(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    projectCtrl.update
  )
  /** DELETE /api/projects/:projectId - Delete project */
  .delete(
    expressJwt({
      secret: JWT_SECRET_TOKEN,
    }),
    projectCtrl.removeHard
  );

export default router;
