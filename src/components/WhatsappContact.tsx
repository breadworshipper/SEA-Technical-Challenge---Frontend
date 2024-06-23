import { FaWhatsapp } from "react-icons/fa6"

interface WhatsappContactProps {
  name: string
  phoneNumber: string
}

export default function WhatsappContact(props: WhatsappContactProps) {
  return (
    <div className="flex flex-row gap-x-3">
      <FaWhatsapp size={40} className="text-deepgrey" />
      <div className="flex flex-col">
        <p className="text-lg">{props.phoneNumber}</p>
        <p className="text-sm">{props.name}</p>
      </div>
    </div>
  )
}
