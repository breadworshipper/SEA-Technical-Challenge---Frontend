import HeroSectionIllustration from "./ui/HeroSectionIllustration"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-silver pt-10 pb-10">
      <div className="flex md:flex-row flex-col justify-evenly gap-x-56 gap-y-10 md:gap-y-0 max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-center">
          <h1 className="font-extrabold text-6xl text-deepgrey mb-2">
            SEA Salon
          </h1>
          <p className="text-black mb-4 text-primary">
            &quot;Beauty and Elegance Redefined&quot;
          </p>
          <p className="mb-4">
            Where to grow your business as a photographer: site or social media?
          </p>
          <div>
            <Button className="text-white">Reserve Now</Button>
          </div>
        </div>
        <HeroSectionIllustration />
      </div>
    </section>
  )
}
