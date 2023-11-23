import { Schema, model } from 'mongoose';
// import validator from 'validator';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.Interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is Required'],
    trim: true, // faka jaiga remove korte trim:true babohar kore
    maxlength: [20, 'First name can not be more then 20 character'],
    // validate: {
    //   validator: function (value: string) {
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1); //Mahmud
    //     return firstNameStr === value;
    //   },
    //   message: '{VALUE} is no in capitalize format',
    // },
  },
  meddleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is Required'],
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    //   message: '{VALUE} is not valid',
    // },
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: [true, 'Father Name is Required'] },
  fatherOcapetion: {
    type: String,
    required: [true, 'Father Occupation is Required'],
  },
  fatherContractNo: {
    type: String,
    required: [true, 'Father Contract Number is Required'],
  },
  matherName: { type: String, required: [true, 'Mother Name is Required'] },
  matherOcapetion: {
    type: String,
    required: [true, 'Mother Occupation is Required'],
  },
  matherContractNo: {
    type: String,
    required: [true, 'Mother Contract Number is Required'],
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: [true, 'Local Guardian Name is Required'] },
  ocapetion: {
    type: String,
    required: [true, 'Local Guardian Occupation is Required'],
  },
  address: {
    type: String,
    required: [true, 'Local Guardian Address is Required'],
  },
  contractNo: {
    type: String,
    required: [true, 'Local Guardian Contract Number is Required'],
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'Student ID is Required'],
    unique: true,
  },
  name: userNameSchema,
  gender: {
    type: String,
    enum: {
      values: ['Male', 'Female', 'Other'],
      message: '{VALUE} is not valid. Gender must be Male, Female, or Other.',
    },
    required: [true, 'Gender is Required'],
  },
  dateOfBirth: { type: String },
  contractNo: { type: String, required: [true, 'Contract Number is Required'] },
  emergencyContractNo: {
    type: String,
    required: [true, 'Emergency Contract Number is Required'],
  },
  email: {
    type: String,
    required: [true, 'Email is Required'],
    unique: true,
    // validate: {
    //   validator: (value: string) => validator.isEmail(value),
    //   message: '{VALUE} is not a valid email',
    // },
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid Blood Group.',
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'Present Address is Required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent Address is Required'],
  },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'block'],
      message: '{VALUE} is not valid. Status must be Active or Blocked.',
    },
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
