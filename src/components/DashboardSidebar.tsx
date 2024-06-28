"use client"

import { Scissors, LayoutDashboard, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

type ButtonsInfoProps = {
  label: string
  icon: any
  route: string
}

type SidebarButtonProps = {
  buttonInfo: ButtonsInfoProps
  key?: number
  pathname: string
  isActive?: boolean
  onClick?: () => void
}

const sidebarButtonSizeStyles = "h-10 py-[12px] px-[12px]"
const sidebarButtonActiveStyles = "bg-white text-primary-orange hover:bg-white"
const sidebarButtonInactiveStyles =
  "text-white hover:bg-white hover:text-primary"

function SidebarButton({ buttonInfo, key, pathname, isActive, onClick, isLoading }: any) {
  isActive ??= pathname?.startsWith(buttonInfo.route)

  const handleClick = (event: React.MouseEvent) => {
    if (isLoading) {
      // Optionally prevent click action or provide feedback
      console.log("Loading in progress. Action disabled.")
      return
    }
    if (onClick) {
      event.preventDefault()
      onClick()
    }
  }

  return (
    <Link
      href={buttonInfo.route}
      key={key}
      className="group"
      onClick={handleClick}
    >
      <Button
        className={cn(
          sidebarButtonSizeStyles,
          isActive ? sidebarButtonActiveStyles : sidebarButtonInactiveStyles,
          "w-[200px] justify-start my-0"
          
        )}
        disabled={isLoading}
      >
        <buttonInfo.icon
          size={24}
          className={cn(
            "mr-[10px]",
            isActive
              ? "text-primary"
              : "text-white group-hover:text-primary"
          )}
        />
        {buttonInfo.label}
      </Button>
    </Link>
  )
}

export default function DashboardSidebar() {
  const pathname = usePathname()
  return (
    <aside className="fixed top-[80px] -z-10 w-64 h-screen bg-tint5 py-6 px-4">
      <Scissors size={100} className="mx-auto" />
      <h2 className="font-semibold text-2xl text-center text-deepgrey">
        SEA SALON
      </h2>

      <div className="flex flex-col gap-y-4 items-center justify-center mt-6">
        <SidebarButton
          buttonInfo={{
            label: "Dashboard",
            icon: LayoutDashboard,
            route: "/dashboard",
          }}
          pathname={pathname}
        />

        <SidebarButton
          buttonInfo={{
            label: "Logout",
            icon: LogOut,
            route: "/",
          }}
          pathname={pathname}
          isActive={pathname === "/"}
        />
      </div>
    </aside>
  )
}
