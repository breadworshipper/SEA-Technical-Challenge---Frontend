import { z } from "zod"
import { ReservationSchema } from "@/types/reservationTypes"

export const submitReservation = async (
  data: z.infer<typeof ReservationSchema>,
  resetForm: () => void,
  toast: any
) => {
  const newData = { ...data, date: data.date.toISOString().split("T")[0] }

  try {
    const response = await fetch(`http://127.0.0.1:8000/api/v1/reservation/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })

    if (!response.ok) {
      throw new Error("Failed to submit reservation")
    }

    resetForm()
    toast({
      title: "Reservation submitted",
      variant: "success",
      description: "Thank you for your reservation!",
    })
  } catch (error) {
    toast({
      title: "Error",
      variant: "error",
      description: "There was an issue submitting your reservation.",
    })
  }
}
