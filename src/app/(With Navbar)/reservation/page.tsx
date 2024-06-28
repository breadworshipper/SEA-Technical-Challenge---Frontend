import ReservationForm from "@/components/ReservationForm"
import HeaderBackground from "../../../components/ui/HeaderBackground"
import Navbar from "@/components/Navbar"

export default function ReservationPage() {
  return (
    <main>
      <HeaderBackground />
      <section className="mx-auto max-w-screen-lg mt-10">
        <h2 className="text-4xl font-bold text-deepgrey text-center">
          Reservation
        </h2>
        <p className="text-center mt-4">
          Make a reservation through the form below :)
        </p>
        <ReservationForm />
      </section>
    </main>
  )
}
