"use client"

import DashboardSidebar from "@/components/DashboardSidebar";
import ReservationTable from "@/components/ReservationTable";
import useReservation from "@/hooks/useReservation";

export default function DashboardPage() {
    
    return (
      <div className="">
        <DashboardSidebar />
        <main className="ml-72 mt-6">
            <h1 className="text-3xl font-semibold text-deepgrey">
                Past Reservations
            </h1>
            <ReservationTable/>
        </main>
      </div>
    )
}