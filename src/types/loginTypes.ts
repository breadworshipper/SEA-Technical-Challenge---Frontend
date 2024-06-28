import { z, ZodType } from "zod"

export const LoginSchema: ZodType<LoginData> = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(1, "Required"),
})

export type LoginData = {
    email: string
    password: string
}
