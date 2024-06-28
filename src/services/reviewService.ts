import { ReviewSchema } from '../types/reviewTypes';
import { z } from "zod"

export const submitReview = async (
  data: z.infer<typeof ReviewSchema>,
  resetForm: () => void,
  toast: any
) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/v1/review/`, {        
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error("Failed to submit review")
    }
    resetForm()
    toast({
      title: "Review submitted",
      variant: "success",
      description: "Thank you for your review!",
    })
    // Refresh page
    window.location.reload()
  } catch (error) {
    toast({
      title: "Error",
      variant: "error",
      description: "There was an issue submitting your review.",
    })
  }
}

export const getReviews = async (page: number, toast: any) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/v1/review/${page}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    if (!response.ok) {
      throw new Error("Failed to fetch review")
    }

    const data = await response.json()
    return data
  } catch (error) {
    toast({
      title: "Error",
      variant: "error",
      description: "There was an issue fetching review.",
    })
  }
}
