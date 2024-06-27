"use client"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { ReviewSchema } from "@/types/reviewTypes"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/components/ui/use-toast"
import { UserRound, MessageCircle, Star } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { z } from "zod"
import { submitReview } from "@/services/reviewService"

export default function ReviewForm() {
  const form = useForm<z.infer<typeof ReviewSchema>>({
    resolver: zodResolver(ReviewSchema),
    defaultValues: {
      name: "",
      review: "",
      rating: "0",
    },
  })
  const { toast } = useToast()

  return (
    <Form {...form}>
      <form
        className="bg-white rounded-3xl mt-16 shadow-xl pt-4 w-3/4 mx-auto"
        onSubmit={form.handleSubmit((data) => {
          submitReview(data, form.reset, toast)
        })}
      >
        <div className="px-8">
          <div className="flex items-center my-4">
            <UserRound />
            <p className="ml-2 font-semibold">Nama</p>
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Nama" className="my-4 w-1/2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center my-4">
            <MessageCircle />
            <p className="ml-2 font-semibold">Review</p>
          </div>
          <FormField
            control={form.control}
            name="review"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Review"
                    className="my-2 w-full resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center my-4">
            <Star />
            <p className="ml-2 font-semibold">Rating</p>
          </div>
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-x-4"
                  >
                    <FormItem className="flex items-center">
                      <FormControl>
                        <RadioGroupItem value="1" />
                      </FormControl>
                      <FormLabel>1</FormLabel>
                    </FormItem>

                    <FormItem className="flex items-center">
                      <FormControl>
                        <RadioGroupItem value="2" />
                      </FormControl>
                      <FormLabel>2</FormLabel>
                    </FormItem>

                    <FormItem className="flex items-center">
                      <FormControl>
                        <RadioGroupItem value="3" />
                      </FormControl>
                      <FormLabel>3</FormLabel>
                    </FormItem>

                    <FormItem className="flex items-center">
                      <FormControl>
                        <RadioGroupItem value="4" />
                      </FormControl>
                      <FormLabel>4</FormLabel>
                    </FormItem>

                    <FormItem className="flex items-center justify-center">
                      <FormControl>
                        <RadioGroupItem value="5" />
                      </FormControl>
                      <FormLabel>5</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
