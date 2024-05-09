import Header from '../../components/header/Header';
import "./Dashboard.css";
import NumberBox from '../../components/number-box/NumberBox';
import numberOfUsersIcon from "../../assets/imgs/number-of-users-icon.png";
import numberOfCoachIcon from "../../assets/imgs/number-of-coach-icon.png";
import numberOfPostsIcon from "../../assets/imgs/number-of-posts-icon.png";
import numberOfExercisesIcon from "../../assets/imgs/number-of-exercises-icon.png";
function Dashboard() {
  return (
    <div className="dashboard">
      <Header title={"Dashboard"}/>
      <div className="holder flex">
        <div className="holder-left">
          <div className="numbers flex">
            <NumberBox icon={numberOfUsersIcon} title={"Number of Users"} value={100} />
            <NumberBox icon={numberOfCoachIcon} title={"Number of Coach"} value={100} />
            <NumberBox icon={numberOfExercisesIcon} title={"Number of Exercises"} value={100} />
            <NumberBox icon={numberOfPostsIcon} title={"Number of Posts"} value={100} />
          </div>
        </div>
        <div className="holder-right"></div>
      </div>
    </div>
  )
}

export default Dashboard;