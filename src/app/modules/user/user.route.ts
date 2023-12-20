import express from 'express';
import { UserControler } from './user.controller';
import { createStudentValidationSchema } from '../student/student.validation';
import validateRequest from '../../meddlware/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  UserControler.createStudent,
);

export const UserRoutes = router;
