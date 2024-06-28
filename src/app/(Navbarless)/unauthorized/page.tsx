import { CircleAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col gap-y-8 justify-center items-center h-screen">
      <div className="flex gap-4 justify-center items-center">
        <CircleAlert className="text-red-500" size={64} />
        <h1 className="text-3xl font-semibold text-deepgrey">Unauthorized</h1>
      </div>
      <Link href="/auth">
        <Button className="text-white w-[150px]">Login</Button>
      </Link>
    </div>
  )
}
