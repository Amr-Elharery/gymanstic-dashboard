import UsersStatisticsImage from "../../assets/imgs/users-statistics.png";
import UserIcon from "../../assets/imgs/user-icon.png";
import "./UsersStatistics.css";

function UsersStatistics() {
  return (
    <div className="users-statistics rad-16">
        <h2>
            New user vs old user
        </h2>

        <div className="img flex justify-center">
            <img src={UsersStatisticsImage} alt="statistics" />
        </div>

        <div className="users flex flex-col">
            <div className="user old-user flex flex-between">
                <div className="flex items-center">
                    <div className="icon rad-6">
                        <img src={UserIcon} alt="User icon" />
                    </div>
                    <p className="bold">old users</p>
                </div>
                <p>8.823</p>
            </div>
            <div className="user new-user flex flex-between">
                <div className="flex items-center">
                    <div className="icon rad-6">
                        <img src={UserIcon} alt="User icon" />
                    </div>
                    <p className="bold">new users</p>
                </div>
                <p className="c-primary">12.122</p>
            </div>
        </div>
    </div>
  )
}

export default UsersStatistics;