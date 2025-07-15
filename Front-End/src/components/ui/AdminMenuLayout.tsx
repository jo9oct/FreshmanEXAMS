

import React from 'react'
import Header from "../../components/AdminHeader.tsx"
import Footer from "../../components/AdminFooter.tsx"
import { Outlet } from "react-router-dom";

export const AdminMenuLayout: React.FC = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default AdminMenuLayout;