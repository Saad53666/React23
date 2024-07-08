import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Login() {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl min-h-96 bg-slate-400 p-6 text-black border border-gray-300 rounded-lg shadow-lg">
      <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
      </div>
    </div>
    </>
  )
}
