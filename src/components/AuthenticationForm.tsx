"use client"

import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import { Scissors } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AuthenticationForm() {
    const router = useRouter()
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-white w-3/4 lg:w-1/2 rounded-lg p-4 shadow-lg">
        <div className="flex flex-wrap justify-evenly gap-y-8 items-center">
          <div>
            <Scissors size={200} color="#28CB8B" />
            <h2 className="font-semibold text-4xl">SEA SALON</h2>
          </div>

          <Tabs defaultValue="login" className="w-[400px]">
            <TabsList className="">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm router={router}/>
            </TabsContent>
            <TabsContent value="register">
              <RegisterForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
