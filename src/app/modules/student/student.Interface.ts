// import { Schema, model, connect } from 'mongoose';
// 1. Create an interface representing a document in MongoDB.

import { Model } from 'mongoose';

export type TUserName = {
  firstName: string;
  meddleName?: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOcapetion: string;
  fatherContractNo: string;
  matherName: string;
  matherOcapetion: string;
  matherContractNo: string;
};

export type TLocalGuardian = {
  name: string;
  ocapetion: string;
  address: string;
  contractNo: string;
};

export type TStudent = {
  id: string;
  name: TUserName;
  gender: 'Male' | 'Female' | 'Other';
  dateOfBirth?: string;
  contractNo: string;
  emergencyContractNo: string;
  email: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'block';
};

export type StudentMethods = {
  isUserExists(id: string): Promise<TStudent | null>;
};

export type StudentModel = Model<
  TStudent,
  Record<string, never>,
  StudentMethods
>;
