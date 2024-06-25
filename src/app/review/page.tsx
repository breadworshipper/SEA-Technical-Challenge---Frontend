"use client"
import ReviewForm from "../../components/ReviewForm"
import { useState } from "react"
import { BsThreeDots } from "react-icons/bs"
import ReviewCard from "@/components/ReviewCard"
import HeaderBackground from "@/components/ui/HeaderBackground"

export default function ReviewPage() {
  const [reviews, setReviews] = useState<any>([
    {
      name: "Azhra Yashna Azka",
      date: "22-10-03",
      rating: 5,
      review: "This is a review",
    },
  ])

  return (
    <main>
      <HeaderBackground />
      <section className="mx-auto max-w-screen-lg mt-10">
        <h2 className="text-4xl font-bold text-deepgrey text-center">
          Reviews
        </h2>
        <p className="text-center mt-4">
          Leave your kind review through the form below :)
        </p>
        <ReviewForm reviews={reviews} setReviews={setReviews} />
      </section>
      <section className="mx-auto max-w-screen-lg mt-10">
        {reviews.length === 0 ? (
          <>
            <BsThreeDots size={60} className="mx-auto" />
            <p className="text-center">There's no review yet</p>
          </>
        ) : (
          <div className="flex flex-col gap-y-8">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                date={new Date().toLocaleDateString()}
                rating={review.rating}
                review={review.review}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
