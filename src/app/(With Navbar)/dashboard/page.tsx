"use client"

import DashboardSidebar from "@/components/DashboardSidebar";
import ReservationTable from "@/components/ReservationTable";
import useReservation from "@/hooks/useReservation";

export default function DashboardPage() {
    const { data, loading, error } = useReservation()

    return (
      <div className="flex">
        <DashboardSidebar/>
        <main className="ml-72 mt-6">
            <h1 className="text-3xl font-semibold text-deepgrey lg:w-11/12">
                Past Reservations
            </h1>
            <ReservationTable data={data} loading={loading} error={error}/>
        </main>
      </div>
    )
}