import Cookies from 'js-cookie';
import { LoginSchema } from "@/types/loginTypes"
import { z } from "zod"
import { jwtDecode } from "jwt-decode"

export async function submitLogin(
  data: z.infer<typeof LoginSchema>,
  resetForm: () => void,
  toast:any
) {
  try {
    console.log(JSON.stringify(data))
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/token/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )

    if (!response.ok) {
      throw new Error("Failed to login")
    }

    const json = await response.json()
    localStorage.setItem("access", json.access)
    localStorage.setItem("refresh", json.refresh)
    Cookies.set("access", json.access)
    Cookies.set("refresh", json.refresh)
    Cookies.set("loggedIn", "true")
    const decoded = jwtDecode(json.access)
    Cookies.set("role", decoded.role)

    resetForm()
    
    console.log(decoded.role)
    // route to home
    if (decoded.role === "Admin") {
      window.location.href = "/admin/dashboard"
    }
    else {
      window.location.href = "/"
    }
    
  } catch (error) {
    // toast({
    //   title: "Error",
    //   variant: "error",
    //   description: "There was an issue logging in.",
    // })
  }
}
