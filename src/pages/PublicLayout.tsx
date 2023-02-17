import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../navbar/Navbar"

const PublicLayout = () => {
  return (
    <div className="bg-[url('./img/background.jpg')] bg-center bg-cover bg-blend-multiply h-screen overflow-hidden bg-slate-700 flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default PublicLayout
