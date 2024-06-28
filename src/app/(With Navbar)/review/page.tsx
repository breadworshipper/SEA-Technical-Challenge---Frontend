"use client"
import ReviewForm from "../../../components/ReviewForm"
import { useState } from "react"
import { BsThreeDots } from "react-icons/bs"
import ReviewCard from "@/components/ReviewCard"
import HeaderBackground from "@/components/ui/HeaderBackground"
import { ReviewSection } from "@/components/ReviewSection"

export default function ReviewPage() {
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
        <ReviewForm />
      </section>
      <section className="mx-auto max-w-screen-lg mt-10">
        <ReviewSection />
      </section>
    </main>
  )
}
