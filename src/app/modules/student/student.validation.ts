import { z } from 'zod';

// Define Zod schemas for nested structures (if needed)
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => value.charAt(0) === value.charAt(0).toUpperCase(), {
      message: 'First Name must start with an uppercase letter',
    }),
  meddleName: z.string().optional(),
  lastName: z.string().min(1),
});

const guardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOcapetion: z.string(),
  fatherContractNo: z.string(),
  matherName: z.string(),
  matherOcapetion: z.string(),
  matherContractNo: z.string(),
});

const localGuardianValidationSchema = z.object({
  name: z.string(),
  ocapetion: z.string(),
  address: z.string(),
  contractNo: z.string(),
});

const studentValidationSchema = z.object({
  id: z.string(),
  name: userNameValidationSchema,
  gender: z.enum(['Male', 'Female', 'Other']),
  dateOfBirth: z.string().optional(),
  contractNo: z.string(),
  emergencyContractNo: z.string(),
  email: z.string().email(),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string(),
  isActive: z.enum(['active', 'block']),
});

export default studentValidationSchema;
