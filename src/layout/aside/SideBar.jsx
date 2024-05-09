import Logo from "../../components/logo/Logo";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
import dashboardIcon from "../../assets/imgs/dashboard-icon.png";
import allExercisesIcon from "../../assets/imgs/all-exercises-icon.png";
import coachRequestIcon from "../../assets/imgs/coach-request-icon.png";

function SideBar(){
    return (
        <aside className="side-bar flex items-center flex-col">
            <Logo width={70}/>

            <ul className="links flex flex-col">
                <li>
                    <NavLink to="/" className={`link btn-shape flex items-center ${(isActive)=> isActive ? "active": ""}`} >
                    <img src={dashboardIcon} alt="Dashboard Icon" />
                    <span className="hide-mobile">Dashboard</span>
                </NavLink>
                </li>
                <li>
                    <NavLink to="all-exercises" className={`link btn-shape flex items-center ${(isActive)=> isActive ? "active": ""}`}>
                    <img src={allExercisesIcon} alt="All Exercises Icon" />
                   <span className="hide-mobile">All Exercises</span>
                </NavLink>
                </li>
                <li>
                    <NavLink to="coach-request" className={`link btn-shape flex items-center ${(isActive)=> isActive ? "active": ""}`}>
                    <img src={coachRequestIcon} alt="Coach Request Icon" />
                    <span className="hide-mobile">Coach Request</span>
                </NavLink>
                </li>
                <li>
                    <NavLink to="community" className={`link btn-shape flex items-center ${(isActive)=> isActive ? "active": ""}`}>
                    <img src={allExercisesIcon} alt="Community Icon" />
                   <span className="hide-mobile">Community</span>
                </NavLink>
                </li>
                <li>
                    <NavLink to="shop" className={`link btn-shape flex items-center ${(isActive)=> isActive ? "active": ""}`}>
                    <img src={coachRequestIcon} alt="Shop Icon" />
                    <span className="hide-mobile">Shop</span>
                </NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default SideBar;