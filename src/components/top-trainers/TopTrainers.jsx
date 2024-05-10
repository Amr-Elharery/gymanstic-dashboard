import "./TopTrainers.css";
import Trainer from "../trainer/Trainer";

import TrainerOne from "../../assets/imgs/trainer-1.png";
import TrainerTwo from "../../assets/imgs/trainer-2.png";
import TrainerThree from "../../assets/imgs/trainer-3.png";
import TrainerFour from "../../assets/imgs/trainer-4.png";
import TrainerFive from "../../assets/imgs/trainer-5.png";

function TopTrainers() {
  return (
    <div className="top-trainers flex flex-col">
        <div className="upper flex flex-between items-center">
            <h2>Top Trainers</h2>
            <p className="c-primary">View All</p>
        </div>
        <div className="lower">
          <div className="trainers flex justify-center">
            <Trainer name={"Markus Zukas"} image={TrainerOne} />
            <Trainer name={"Markus Zukas"} image={TrainerTwo} />
            <Trainer name={"Markus Zukas"} image={TrainerThree} />
            <Trainer name={"Markus Zukas"} image={TrainerFour} />
            <Trainer name={"Markus Zukas"} image={TrainerFive} />
          </div>
        </div>
    </div>
  )
}

export default TopTrainers;