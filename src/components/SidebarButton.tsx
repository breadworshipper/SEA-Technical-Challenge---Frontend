import Link from "next/link"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"


const sidebarButtonSizeStyles = "h-10 py-[12px] px-[12px]"
const sidebarButtonActiveStyles = "bg-white text-primary-orange hover:bg-white"
const sidebarButtonInactiveStyles =
  "text-white hover:bg-white hover:text-primary"

export default function SidebarButton({ buttonInfo, key, pathname, isActive, onClick }: any) {
  isActive ??= pathname?.startsWith(buttonInfo.route)

  const handleClick = (event: React.MouseEvent) => {
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
      >
        <buttonInfo.icon
          size={24}
          className={cn(
            "mr-[10px]",
            isActive ? "text-primary" : "text-white group-hover:text-primary"
          )}
        />
        {buttonInfo.label}
      </Button>
    </Link>
  )
}
