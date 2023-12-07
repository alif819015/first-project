import { z } from 'zod';

const userSchema = z.object({
  id: z.string(),
  password: z
    .string()
    .max(20, { message: 'Password can not be more then 20 characters' }),
  needsPasswordChange: z.boolean().optional().default(true),
  role: z.enum(['admin', 'user', 'faculty']),
  status: z.enum(['in-progress', 'block']).default('in-progress'),
  isDeleted: z.boolean().optional().default(false),
});

export default userSchema;
