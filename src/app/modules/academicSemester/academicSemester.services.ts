import { TAcademicSemesterCode } from './academicSemester.Interface';
import { academicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemesterCode) => {
  const result = await academicSemester.create(payload);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
