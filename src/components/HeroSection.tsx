import Link from "next/link"
import HeroSectionIllustration from "./ui/HeroSectionIllustration"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-silver pt-10 pb-10">
      <div className="flex md:flex-row flex-col gap-x-56 gap-y-10 md:gap-y-0 max-w-screen-lg items-center justify-evenly mx-auto">
        <div className="flex flex-col justify-center max-w-md">
          <h1 className="font-extrabold text-6xl text-deepgrey mb-2">
            SEA Salon
          </h1>
          <p className="text-black mb-4 text-primary">
            &quot;Beauty and Elegance Redefined&quot;
          </p>
          <p className="text-black mb-4">
            Welcome to SEA Salon, where beauty and elegance meet. Our team of
            skilled professionals is dedicated to providing you with the best
            salon experience.
          </p>
          <div>
            <Link href={"/reservation"}>
              <Button className="text-white">Reserve Now</Button>
            </Link>
          </div>
        </div>
        <HeroSectionIllustration />
      </div>
    </section>
  )
}
