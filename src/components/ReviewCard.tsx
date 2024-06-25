import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoPersonOutline } from "react-icons/io5"
import { IoStar } from "react-icons/io5"

interface ReviewCardProps {
    name: string
    review: string
    rating: number
    date: string
}

export default function ReviewCard(props: ReviewCardProps) {
    return (
      <Card className="shadow-lg w-3/4 lg:w-1/2 mx-auto">
        <CardHeader>
          <div className="flex items-center mb-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>Av</AvatarFallback>
            </Avatar>
            <div className="ml-2">
              <CardTitle className="text-lg">{props.name}</CardTitle>
              <p className="text-sm">{props.date}</p>
            </div>
          </div>
          <div className="flex gap-x-4">
            {Array(Number(props.rating))
              .fill(null)
              .map((_, index) => (
                <IoStar key={index} size={20} className="text-yellow-500" />
              ))}
          </div>
        </CardHeader>
        <CardContent>
          <p>{props.review}</p>
        </CardContent>
      </Card>
    )
}