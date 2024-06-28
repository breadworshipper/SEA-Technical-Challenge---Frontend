import { RiScissors2Line } from "react-icons/ri"
import { GiFingersCrossed } from "react-icons/gi"
import { PiMaskHappyFill } from "react-icons/pi"
import ServicesCard from "./ServicesCard"

export default function ServicesSection() {
  return (
    <section className="bg-white pt-10 pb-10">
      <div className="max-w-screen-lg mx-auto mb-10">
        <h2 className="text-4xl font-bold text-deepgrey text-center">
          Services
        </h2>
        <p className="text-center font-light">What we offer to our customer</p>
      </div>
      <div className="flex flex-col md:flex-row max-w-screen-lg md:gap-x-10 gap-y-8 mx-auto justify-evenly items-center">
        <ServicesCard
          title="Haircut & Styling"
          description="Our membership management software provides full automation of membership renewals and payments"
          iconComponent={RiScissors2Line}
        />

        <ServicesCard
          title="Manicure & Pedicure"
          description="Our membership management software provides full automation of membership renewals and payments"
          iconComponent={GiFingersCrossed}
        />

        <ServicesCard
          title="Facial Treatments"
          description="Our membership management software provides full automation of membership renewals and payments"
          iconComponent={PiMaskHappyFill}
        />
      </div>
    </section>
  )
}
