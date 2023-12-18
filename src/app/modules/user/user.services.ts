import config from '../../config';
import { TStudent } from '../student/student.Interface';
import { Student } from '../student/student.model';
import { TUser } from './user.Interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // if (await Student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists!');
  // }

  // create a user
  const userData: Partial<TUser> = {};

  // if password is not given , user deafult password
  userData.password = password || (config.defult_password as string);
// console.log(studentData)
  // set student role
  userData.role = 'student';

  // set menually genated id
  userData.id = '2030100001';

  // create a user
  const newUser = await User.create(userData);
// console.log(newUser)
  // create a student
  if (Object.keys(newUser).length) {
    // set id, _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; // reference _id
  }
  // console.log(studentData)
  const newStudent = await Student.create(studentData);
  return newStudent;
};

export const UserService = {
  createStudentIntoDB,
};
