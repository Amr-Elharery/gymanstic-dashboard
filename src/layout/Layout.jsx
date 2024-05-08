import React from 'react'
import SideBar from './aside/SideBar';
import { Outlet } from 'react-router-dom';
import "./Layout.css";

function Layout() {
  return (
    <div className="layout flex">
        <SideBar />
        <div className="content">
          <Outlet />
        </div>
    </div>
  )
}

export default Layout;