import UserSolidIcon from "../../assets/imgs/user-solid-icon.png";
import BagIcon from "../../assets/imgs/bag-icon.png";
import "./CoachInfo.css";
function CoachInfo() {
  let user = {
    id: 6743,
    fullName:"Shristi Singh",
    email: "shristi@gmail.com"
  }
  return (
    <div className="coach-info flex flex-col shadow rad-16 bg-white p-10">
      <div className="info flex p-10">
        <div className="icon rad-16 bg-primary flex items-center justify-center">
          <img src={UserSolidIcon} alt="icon" />
        </div>
        <div className="details flex flex-col">
          <h3 className="id">User ID: #{user.id}</h3>
          <div>
            <p className="name">Full Name: {user.fullName}</p>
            <p className="email">Email: {user.email}</p>
          </div>
        </div>
      </div>
      <div className="certification flex p-10">
        <div className="icon rad-16 bg-primary flex items-center justify-center">
          <img src={BagIcon} alt="icon" />
        </div>
        <h3>Certification</h3>
      </div>
      <button className="btn-shape btn-effect w-fit c-white flex items-center bg-primary">
        Download Info
      </button>
    </div>
  )
}

export default CoachInfo;