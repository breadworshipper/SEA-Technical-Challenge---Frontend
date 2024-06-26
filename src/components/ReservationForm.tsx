"use client"
import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/components/ui/use-toast"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { CalendarDays } from "lucide-react"
import { format } from "date-fns"
import { Clipboard } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { User, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ReservationSchema } from "@/types/reservationTypes"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

export default function ReservationForm() {
  const form = useForm<z.infer<typeof ReservationSchema>>({
    resolver: zodResolver(ReservationSchema),
    defaultValues: {
      name: "",
      phone_number: "",
      time: "",
    },
  })
  const { toast } = useToast()

  return (
    <Form {...form}>
      <form
        className="bg-white rounded-3xl mt-16 shadow-xl pt-4 w-3/4 mx-auto"
        onSubmit={form.handleSubmit((data) => {
          const newData = { ...data }
          newData.date = data.date.toISOString().split("T")[0]
          console.log(newData)
          fetch(`http://127.0.0.1:8000/api/v1/reservation/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
          })
          form.reset()
          toast({
            title: "Reservation submitted",
            variant: "success",
            description: "Thank you for your reservation!",
          })
        })}
      >
        <div className="px-8">
          <div className="flex flex-wrap gap-x-4 justify-center">
            <div>
              <div className="flex items-center my-4">
                <User />
                <p className="ml-2 font-semibold">Nama</p>
              </div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Nama"
                        className="my-4 w-80"
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
                        placeholder="Nomor Telepon"
                        className="my-4 w-80"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-x-4 justify-center">
            <div>
              <div className="flex items-center my-4">
                <CalendarDays />
                <p className="ml-2 font-semibold">Tanggal</p>
              </div>
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-80 justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <div className="flex items-center my-4">
                <Clipboard />
                <p className="ml-2 font-semibold">Sesi</p>
              </div>
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-80">
                        <SelectValue placeholder="Pilih Sesi" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09.00-10.00</SelectItem>
                        <SelectItem value="10:00">10.00-11.00</SelectItem>
                        <SelectItem value="11:00">11.00-12.00</SelectItem>
                        <SelectItem value="12:00">12.00-13.00</SelectItem>
                        <SelectItem value="13:00">13.00-14.00</SelectItem>
                        <SelectItem value="14:00">14.00-15.00</SelectItem>
                        <SelectItem value="15:00">15.00-16.00</SelectItem>
                        <SelectItem value="16:00">16.00-17.00</SelectItem>
                        <SelectItem value="17:00">17.00-18.00</SelectItem>
                        <SelectItem value="18:00">18.00-19.00</SelectItem>
                        <SelectItem value="19:00">19.00-20.00</SelectItem>
                        <SelectItem value="20:00">20.00-21.00</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <div className="flex items-center my-4">
                <Clipboard />
                <p className="ml-2 font-semibold">Sesi</p>
              </div>
              <FormField
                control={form.control}
                name="type_of_service"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-80">
                        <SelectValue placeholder="Pilih Layanan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Haircuts and styling">
                          Haircuts and styling
                        </SelectItem>
                        <SelectItem value="Manicure and pedicure">
                          Manicure and pedicure
                        </SelectItem>
                        <SelectItem value="Facial treatment">
                          Facial treatment
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <Button
          className="text-white w-full mt-4 rounded-b-3xl rounded-t-none"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}
