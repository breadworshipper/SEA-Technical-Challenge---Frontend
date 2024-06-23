import WhatsappContact from "./WhatsappContact"
import { FaWhatsapp } from "react-icons/fa6"

export default function ContactSection() {
  return (
    <section className="bg-silver py-16">
      <div className="flex flex-row justify-evenly items-center">
        <div className="flex flex-col">
          <h1 className="font-extrabold text-4xl text-deepgrey mb-2">
            Contact Us
          </h1>
          <p className="mb-4 text-primary">
            Contact us through the following contacts
          </p>
        </div>

        <div className="flex flex-col">
          <p className="text-xl font-bold text-deepgrey">08123456789</p>
          <p className="">Thomas</p>
          <p className="text-xl font-bold text-deepgrey">08164829372</p>
          <p>Sekar</p>
        </div>
      </div>
    </section>
  )
}
