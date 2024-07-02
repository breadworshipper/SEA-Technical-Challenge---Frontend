"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "./ui/skeleton"


export default function AdminDashboard() {

  return (
    <div className="max-w-screen-xl mt-6">
      <section className="flex flex-wrap gap-4">
        <Card className="">
          <CardHeader>
            <CardTitle className="font-bold">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">Rp100.000.000</p>
            <p className="text-sm font-extralight">5% up from last month</p>
          </CardContent>
        </Card>

        <Card className="">
          <CardHeader>
            <CardTitle className="font-bold">Busiest day</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">Saturday</p>
            <p className="text-sm font-extralight">
              Average of 100 reservations
            </p>
          </CardContent>
        </Card>

        <Card className="">
          <CardHeader>
            <CardTitle className="font-bold">Reservations total</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">1,024</p>
            <p className="text-sm font-extralight">52 needs confirmation</p>
          </CardContent>
        </Card>
      </section>
      <Skeleton className="w-[600px] h-[300px] rounded-lg mt-8" />
    </div>
  )
}
