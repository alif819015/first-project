import { Schema, model } from 'mongoose';
import {
  TAcademicSemister,
  TAcademicSemisterCode,
  TAcademicSemisterName,
  TMonths,
} from './academicSemister.Interface';

const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const academicSemisterName: TAcademicSemisterName[] = [
  'Autumn',
  'Summar',
  'Fall',
];

const academicSemisterCode: TAcademicSemisterCode[] = [
  '01','02','03'
];

const academicSemisterSchema = new Schema<TAcademicSemister>(
  {
    name: {
      type: String,
      enum: academicSemisterName,
      require: true,
    },
    code: {
      type: String,
      enum: academicSemisterCode,
      required: true,
    },
    year: {
      type: Date,
      required: true,
    },
    startMonth: {
      type: String,
      enum: Months,
    },
    endMonth: {
      type: String,
      enum: Months,
    },
  },
  {
    timestamps: true,
  },
);

export const academicSemister = model<TAcademicSemister>(
  'academicSemister',
  academicSemisterSchema,
);
