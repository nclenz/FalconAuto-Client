import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../navbar/Navbar"

const PublicLayout = () => {
  return (
    <div className="bg-[url('./img/background.jpg')] bg-center bg-cover bg-blend-multiply min-h-screen bg-slate-700">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default PublicLayout
