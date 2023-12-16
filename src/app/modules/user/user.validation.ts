import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password can not be more then 20 characters' })
    .optional(),
  needsPasswordChange: z.boolean().optional().default(true),
  role: z.enum(['admin', 'user', 'faculty']),
  status: z.enum(['in-progress', 'block']).default('in-progress'),
  isDeleted: z.boolean().optional().default(false),
});

export default userValidationSchema;
