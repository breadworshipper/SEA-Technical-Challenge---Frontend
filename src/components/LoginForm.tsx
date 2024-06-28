"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { LoginSchema } from "@/types/loginTypes"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Mail, Key } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { submitLogin } from "@/services/loginService"
import { useToast } from "./ui/use-toast"

export default function LoginForm(router: any) {
  const toast = useToast()
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          submitLogin(data, form.reset, toast)
        })}
      >
        <div className="flex items-center my-4">
          <Mail />
          <p className="ml-2 font-semibold">Email</p>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="compfest@ui.ac.id"
                  className="my-4 w-full"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center my-4">
          <Key />
          <p className="ml-2 font-semibold">Password</p>
        </div>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="***"
                  className="my-4 w-full"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="text-white w-full mt-4 rounded-lg" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}
