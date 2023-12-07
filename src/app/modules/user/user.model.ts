import { Schema, model } from 'mongoose';
import { TUser } from './user.Interface';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user', 'faculty'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'block'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const User = model<TUser>('User', userSchema);
