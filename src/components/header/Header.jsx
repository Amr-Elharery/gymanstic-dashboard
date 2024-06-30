import "./Header.css";
import userImage from "../../assets/imgs/admin-user.png";
import arrowDownIcon from "../../assets/imgs/arrow-down-icon.png";
import calendarIcon from "../../assets/imgs/calendar-icon.png";
import UserImage from "../user-image/UserImage";
import { useEffect, useState } from "react";

// Function to extract name from email
function extractNameFromEmail(email) {
    let namePart = email.split('@')[0];
    let name = namePart.replace(/[._]/g, ' ');
    name = name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return name;
}

function Header({ title }) {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [id, setId] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    let authData = localStorage.getItem("authorization") 
                || sessionStorage.getItem("authorization");

    if (authData) {
      authData = JSON.parse(authData);
      setId(authData.id);
      setToken(authData.token);
    }
  }, []);

  useEffect(() => {
    if (id && token) {
      fetch(`https://gymnastic-beta.vercel.app/api/v1/users/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        setUserName(extractNameFromEmail(data.data.email));
        setUserRole(data.data.role);
      });
    }
  }, [id, token]);

  return (
    <header className="flex flex-col holder">
      <div className="period flex justify-center">
        <div className="calendar">
          <img src={calendarIcon} alt="calendar" />
        </div>
        <div className="date flex">
          <div className="month">
            {new Date().toLocaleString('en', { month: 'long' })}
          </div>
          <div className="day">
            {new Date().getDate()}
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
  );
}

export default Header;
