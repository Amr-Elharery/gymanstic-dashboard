import { Outlet } from "react-router-dom";

export default function SideBar(){
    return (
        <>
            <h1>Side Bar</h1>
            
            <Outlet />
        </>
    )
}