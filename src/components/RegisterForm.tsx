"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Mail, Key, Phone, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RegisterSchema } from "@/types/registerTypes"
import { submitRegister } from "@/services/registerService"
import { useToast } from "@/components/ui/use-toast"

export default function RegisterForm() {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      full_name: "",  
      email: "",
      phone_number: "",
      password: "",
      password2: "",
    },
  })
  const toast = useToast()

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          submitRegister(data, form.reset, toast)
        })}
      >
        <div className="flex flex-col md:flex-row gap-x-6">
          <div>
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
          </div>

          <div>
            <div className="flex items-center my-4">
              <Phone />
              <p className="ml-2 font-semibold">Nomor Telepon</p>
            </div>
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="081234567890"
                      className="my-4 w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-x-6">
          <div>
            <div className="flex items-center my-4">
              <User />
              <p className="ml-2 font-semibold">Nama Lengkap</p>
            </div>
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Little John"
                      className="my-4 w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
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
          </div>
        </div>
        <div>
          <div className="flex items-center my-4">
            <Key style={{ transform: "rotate(90deg)" }} />
            <p className="ml-2 font-semibold">Konfirmasi Password</p>
          </div>
          <FormField
            control={form.control}
            name="password2"
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
        </div>

        <Button className="text-white w-full mt-4 rounded-lg" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}
