import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import ServicesSectionIllustration from "./ui/ServicesSectionIllustration"

interface ServicesCardProps {
  title: string
  description: string
  iconComponent: React.ElementType
}

export default function ServicesCard(props: ServicesCardProps) {
  return (
    <Card className="w-72 flex flex-col items-center justify-center z-0 p-2 shadow-lg">
      <props.iconComponent size={80} className="z-10" />
      <div className="relative mb-6">
        <div className="absolute -top-16 -right-10 z-1">
          <ServicesSectionIllustration />
        </div>
      </div>
      <CardContent>
        <CardTitle className="text-center mb-2">{props.title}</CardTitle>
        <CardDescription className="text-center">
          {props.description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
