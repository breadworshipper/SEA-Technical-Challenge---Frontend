"use client"

import { Scissors, LayoutDashboard, LogOut, Building } from "lucide-react"
import { usePathname } from "next/navigation"
import { logout } from "@/services/logoutService"
import { useToast } from "./ui/use-toast"
import SidebarButton from "./SidebarButton"

export default function AdminDashboardSidebar() {
  const pathname = usePathname()
  const toast = useToast()
  return (
    <aside className="fixed h-screen bg-tint5 py-6 px-4 flex flex-col items-center justify-center">
      <div>
        <Scissors size={100} className="mx-auto" />
        <h2 className="font-semibold text-2xl text-center text-deepgrey">
          SEA SALON
        </h2>
      </div>

      <div className="flex flex-col gap-y-4 items-center justify-center mt-6 mb-10">
        <SidebarButton
          buttonInfo={{
            label: "Dashboard",
            icon: LayoutDashboard,
            route: "/admin/dashboard",
          }}
          pathname={pathname}
          isActive={pathname === "/admin/dashboard"}
        />

        <SidebarButton
          buttonInfo={{
            label: "Branch",
            icon: Building,
            route: "/admin/branch",
          }}
          pathname={pathname}
          isActive={pathname === "/admin/branch"}
        />

        <SidebarButton
          buttonInfo={{
            label: "Logout",
            icon: LogOut,
            route: "/logout",
          }}
          pathname={pathname}
          isActive={pathname === "/"}
          onClick={() => {
            logout()
          }}
        />
      </div>
    </aside>
  )
}
