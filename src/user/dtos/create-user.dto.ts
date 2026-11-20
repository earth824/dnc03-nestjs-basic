import z from 'zod';

export const createUserSchema = z.object({
  email: z.string().trim().pipe(z.email()),
  password: z.string().min(6),
  gender: z.enum(['MALE', 'FEMALE']).exactOptional(),
  // dob: z.iso.date().exactOptional(),
  dob: z.coerce.date().exactOptional(),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
