import { Request, Response } from 'express';
import { StudentServices } from './student.services';
import studentValidationSchema from './student.validation';
// import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    // creating a schema validation using zod

    const { student: studentData } = req.body;

    // data validation using joi
    // const { error, value } = studentValidationSchema.validate(studentData);

    // data validation using zod
    const zodParseData = studentValidationSchema.parse(studentData);

    const result = await StudentServices.createStudentIntoDB(zodParseData);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong',
    //     // error: error.details,
    //     error,
    //   });
    // }

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is create Successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDb();
    res.status(200).json({
      success: true,
      message: 'Student are retrieved Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is retrieved Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
