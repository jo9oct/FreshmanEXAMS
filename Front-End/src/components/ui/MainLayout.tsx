
import React from 'react'
import Header from "../../components/Header.tsx"
import AdBanner from "../../components/AdBanner.tsx"
import Footer from "../../components/Footer.tsx"
import { Outlet } from "react-router-dom";

export const MainLayout: React.FC = () => {
  return (
    <>
        <Header/>
        <AdBanner/>
        <Outlet/>
        <Footer/>
    </>
  )
}
