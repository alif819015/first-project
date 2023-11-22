import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.Interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  meddleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOcapetion: { type: String, required: true },
  fatherContractNo: { type: String, required: true },
  matherName: { type: String, required: true },
  matherOcapetion: { type: String, required: true },
  matherContractNo: { type: String, required: true },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  ocapetion: { type: String, required: true },
  address: { type: String, required: true },
  contractNo: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['Male', 'Female'],
  dateOfBirth: String,
  contractNo: { type: String, required: true },
  emergencyContractNo: { type: String, required: true },
  email: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isActive: ['active', 'block'],
});

export const StudentModel = model<Student>('Student', studentSchema);
