import { z, ZodType } from "zod" 

export const UserSchema: ZodType<FormData> = z.object({
  name: z.string().min(1, "Name is required").max(20, "Maximum 20 characters"),
  review: z.string().min(10, "Minimal of 20 characters").max(200, "Maximum 200 characters"),
  rating: z.string().min(1, "Rating is required"),
})
  

export type FormData = {
    name: string;
    review: string;
    rating: string;
}
