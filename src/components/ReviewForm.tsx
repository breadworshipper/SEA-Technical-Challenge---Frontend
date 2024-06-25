"use client"
import { FaRegCommentDots } from "react-icons/fa"
import { IoPersonOutline } from "react-icons/io5"
import { IoIosStarOutline } from "react-icons/io"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { UserSchema } from "@/types/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/components/ui/use-toast"

interface CommentFormProps {
  reviews: any
  setReviews: any
}

export default function CommentForm(props: CommentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(UserSchema) })
  const { toast } = useToast()

  return (
    <form
      className="bg-white rounded-3xl mt-16 shadow-xl pt-4"
      onSubmit={handleSubmit((data) => {
        props.setReviews([data, ...props.reviews])
        toast({
          title: "Review submitted",
          description: "Thank you for your review!",
          variant: "success",
        })
      })}
    >
      <div className="px-8">
        <div className="flex items-center my-4">
          <IoPersonOutline className="text-deepgrey" size={20} />
          <p className="ml-2">Nama</p>
        </div>
        <Input
          {...register("name")}
          placeholder="Nama"
          className="my-4 w-1/2"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <div className="flex items-center my-4">
          <FaRegCommentDots className="text-deepgrey" size={20} />
          <p className="ml-2">Review</p>
        </div>
        <Textarea
          {...register("review")}
          placeholder="Review"
          className="my-2 w-full resize-none"
        />
        {errors.review && (
          <p className="text-red-500">{errors.review.message}</p>
        )}

        <div className="flex items-center my-4">
          <IoIosStarOutline className="text-deepgrey" size={20} />
          <p className="ml-2">Rating</p>
        </div>
        <RadioGroup className="mb-4">
          <div className="flex">
            <div className="flex items-center space-x-1 mr-4">
              <input {...register("rating")} type="radio" value="1" id="1" />
              <Label htmlFor="1">1</Label>
            </div>
            <div className="flex items-center space-x-1 mr-4">
              <input {...register("rating")} type="radio" value="2" id="2" />
              <Label htmlFor="2">2</Label>
            </div>
            <div className="flex items-center space-x-1 mr-4">
              <input {...register("rating")} type="radio" value="3" id="3" />
              <Label htmlFor="3">3</Label>
            </div>
            <div className="flex items-center space-x-1 mr-4">
              <input {...register("rating")} type="radio" value="4" id="4" />
              <Label htmlFor="4">4</Label>
            </div>
            <div className="flex items-center space-x-1">
              <input {...register("rating")} type="radio" value="5" id="5" />
              <Label htmlFor="5">5</Label>
            </div>
          </div>
        </RadioGroup>
        {errors.rating && (
          <p className="text-red-500">{errors.rating.message}</p>
        )}
      </div>

      <Button
        className="text-white w-full mt-4 rounded-b-3xl rounded-t-none"
        type="submit"
      >
        Submit
      </Button>
    </form>
  )
}
