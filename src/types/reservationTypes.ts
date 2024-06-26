import { z, ZodType } from "zod"

export const ReservationSchema: ZodType<ReservationData> = z.object({
    name: z.string().min(1, "Name is required").max(20, "Maximum 20 characters"),
    phone_number: z
        .string()
        .min(1, "Required")
        .startsWith("08", "Invalid phone number")
        .max(13),
    date: z.date(),
    time: z.string().min(1, "Session is required"),
    type_of_service: z.string().min(1, "Type of service is required"),
})

export type ReservationData = {
  name: string
  phone_number: string
  date: any
  time: string
  type_of_service: string
}
