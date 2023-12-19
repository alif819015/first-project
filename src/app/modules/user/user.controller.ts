import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.services';

const createStudent = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { password, student: studentData } = req.body;
    // const zodParsedData = userValidationSchema.parse(studentData);
    const result = await UserService.createStudentIntoDB(password, studentData);
    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    next(err)
  }
};

export const UserControler = {
  createStudent,
};
