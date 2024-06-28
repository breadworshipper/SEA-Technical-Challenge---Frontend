import { RegisterSchema } from './../types/registerTypes';
import { z } from 'zod';
import Cookies from 'js-cookie';

export async function submitRegister(data: z.infer<typeof RegisterSchema>,
  resetForm: () => void,
  toast:any) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/register/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        )

        if (!response.ok) {
            throw new Error("Failed to register")
        }

        const json = await response.json()
        console.log(json)
        resetForm()
        
        // Remove cookies
        Cookies.remove("access")
        Cookies.remove("refresh")
        Cookies.remove("loggedIn")
        Cookies.remove("role")

        // route to home
        window.location.href = "/auth"
    }
    catch (error) {
        // toast({
        //   title: "Error",
        //   variant: "error",
        //   description: "There was an issue logging in.",
        // })
    }
}
