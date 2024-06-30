import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Exercise from "../../components/exercise/Exercise.jsx";
import AddExerciseForm from "../../components/add-exercise-form/AddExerciseForm.jsx";
import "./AllExercises.css";
import { useNavigate } from "react-router-dom";

function AllExercises() {
  const [exercises, setExercises] = useState([]);
  const [, setCategories] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (!(localStorage.getItem("authorization") || sessionStorage.getItem("authorization"))) {
      navigate("/login");
    }
  }, [navigate]);

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
      fetch("https://gymnastic-beta.vercel.app/api/v1/category-exercises", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(resObj => {
        setCategories(resObj.data);
        const allExercises = resObj.data.flatMap(category => category.exercises);
        setExercises(allExercises);
        console.log(allExercises);
      });
    }
  }, [id, token]);

  return (
    <div className="all-exercises">
      <Header title={"All Exercises"} />
      <div className="holder flex">
        <div className="holder-left">
          {exercises.map(e => <Exercise key={e.image} exercise={e} />)}
        </div>
        <div className="holder-right flex flex-col bg-white rad-16">
          <AddExerciseForm />
        </div>
      </div>
    </div>
  );
}

export default AllExercises;
