import React from 'react'
import NumberBox from '../number-box/NumberBox';
import numberOfUsersIcon from "../../assets/imgs/user-icon.png";
import numberOfCoachIcon from "../../assets/imgs/number-of-coach-icon.png";
import numberOfPostsIcon from "../../assets/imgs/number-of-posts-icon.png";
import numberOfExercisesIcon from "../../assets/imgs/number-of-exercises-icon.png";

import "./Numbers.css";
function Numbers() {
  return (
    <div className="numbers flex">
    <NumberBox icon={numberOfUsersIcon} title={"Number of Users"} value={100} />
    <NumberBox icon={numberOfCoachIcon} title={"Number of Coach"} value={100} />
    <NumberBox icon={numberOfExercisesIcon} title={"Number of Exercises's Categories"} value={100} />
    <NumberBox icon={numberOfPostsIcon} title={"Number of Posts"} value={100} />
  </div>
  )
}

export default Numbers;