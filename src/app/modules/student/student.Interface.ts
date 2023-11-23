// import { Schema, model, connect } from 'mongoose';
// 1. Create an interface representing a document in MongoDB.

export type UserName = {
  firstName: string;
  meddleName?: string;
  lastName: string;
};

export type Guardian = {
  fatherName: string;
  fatherOcapetion: string;
  fatherContractNo: string;
  matherName: string;
  matherOcapetion: string;
  matherContractNo: string;
};

export type LocalGuardian = {
  name: string;
  ocapetion: string;
  address: string;
  contractNo: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'Male' | 'Female' | 'Other';
  dateOfBirth?: string;
  contractNo: string;
  emergencyContractNo: string;
  email: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'block';
};
