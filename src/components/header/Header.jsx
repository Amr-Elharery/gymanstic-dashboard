import "./Header.css";
import userImage from "../../assets/imgs/admin-user.png";
import arrowDownIcon from "../../assets/imgs/arrow-down-icon.png";
import calendarIcon from "../../assets/imgs/calendar-icon.png";
import UserImage from "../user-image/UserImage";

function Header({ title}) {
  let userName = "John";
  let userRole = "Admin";
  return (
    <header className="flex flex-col">
         <div className="period flex justify-center ">
          <div className="calendar">
            <img src={calendarIcon} alt="calendar" />
          </div>
          <div className="date flex">
            <div className="month">
            {new Date().toLocaleString('en', { month: 'long' })}
            </div>
          
            <div className="day">
            {new Date().getDay()}
            </div>
            ,
            <div className="year">
            {new Date().getFullYear()}
            </div>
          </div>
        </div>
        <div className="header-data flex flex-between items-center">
          <h2 className="title">{title}</h2>

          <div className="user-info flex">
            <UserImage Image={userImage} />

            <div className="info">
              <p className="name">{userName}</p>
              <p className="role c-primary">{userRole}</p>
            </div>

            <div className="icon">
              <img src={arrowDownIcon} alt="icon" />
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header;