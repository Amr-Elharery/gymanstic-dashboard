import React from 'react'
import SideBar from './aside/SideBar';
import { Outlet } from 'react-router-dom';
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
        <SideBar />
        <Outlet />
    </div>
  )
}

export default Layout;