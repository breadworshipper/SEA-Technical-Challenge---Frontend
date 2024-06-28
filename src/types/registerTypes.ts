import { z, ZodType } from "zod"

export const RegisterSchema: ZodType<RegisterData> = z.object({
  full_name: z.string().min(1, "Required"),
  email: z.string().email("Invalid email address"),
  phone_number: z.string().min(1, "Required"),
  password: z.string().min(1, "Required"),
  password2: z.string().min(1, "Required"),
})

export type RegisterData = {
  full_name: string
  email: string
  phone_number: string
  password: string
  password2: string
}
