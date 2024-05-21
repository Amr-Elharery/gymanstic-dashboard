import { useState } from "react";
import Header from "../../components/header/Header";
import Exercise from "../../components/exercise/Exercise.jsx";
import AddExerciseForm from "../../components/add-exercise-form/AddExerciseForm.jsx";
import ExerciseImage from "../../assets/imgs/exercise.png"
;import "./AllExercises.css";
function AllExercises() {
  let [exercises,setExercises ] = useState([
    {
      id: 1,
      name: "Exercise 1",
      type:"Basics",
      image: ExerciseImage,
      describtion: "Lorem ipsum is placeholder text commonly used in the graphic.",
      time: "2:20",
      degree: 1
    },
    {
      id: 2,
      name: "Exercise 1",
      type:"Basics",
      image: ExerciseImage,
      describtion: "Lorem ipsum is placeholder text commonly used in the graphic.",
      time: "2:20",
      degree: 1
    },
    {
      id: 3,
      name: "Exercise 1",
      type:"Basics",
      image: ExerciseImage,
      describtion: "Lorem ipsum is placeholder text commonly used in the graphic.",
      time: "2:20",
      degree: 1
    },
    {
      id: 4,
      name: "Exercise 1",
      type:"Basics",
      image: ExerciseImage,
      describtion: "Lorem ipsum is placeholder text commonly used in the graphic.",
      time: "2:20",
      degree: 1
    },
    {
      id: 5,
      name: "Exercise 1",
      type:"Basics",
      image: ExerciseImage,
      describtion: "Lorem ipsum is placeholder text commonly used in the graphic.",
      time: "2:20",
      degree: 1
    },
    {
      id: 6,
      name: "Exercise 1",
      type:"Basics",
      image: ExerciseImage,
      describtion: "Lorem ipsum is placeholder text commonly used in the graphic.",
      time: "2:20",
      degree: 1
    }
  ]);

  return (
    <div className="all-exercises">
      <Header title={"All Exercises"} />
      <div className="holder flex">
        <div className="holder-left">
          {exercises.map(e => <Exercise key={e.id} exercise={e} />)}
        </div>
        <div className="holder-right flex flex-col bg-white rad-16">
          <AddExerciseForm />
        </div>
      </div>
    </div>
  )
}

export default AllExercises;