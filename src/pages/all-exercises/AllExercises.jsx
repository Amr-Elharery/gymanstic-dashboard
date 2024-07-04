import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Header from "../../components/header/Header";
import Exercise from "../../components/exercise/Exercise.jsx";
import AddExerciseForm from "../../components/add-exercise-form/AddExerciseForm.jsx";
import { useNavigate } from "react-router-dom";
import AddPostIcon from "../../assets/imgs/add-post-icon.png";
import Swal from "sweetalert2";
import "./AllExercises.css";

function AllExercises() {
  const [exercises, setExercises] = useState([]);
  const [, setCategories] = useState([]);

    const [noExercises, setNoExercises] = useState(false);
    const [error, setError] = useState(false);

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
        if(allExercises.length === 0) setNoExercises(true);
        setExercises(allExercises);
      }).catch(err =>{
          setError(true)
            Swal.fire({
                title: "Error",
                text: err.message + " Failed to load exercises",
                icon: "error"
            })
      });
    }
  }, [id, token]);

  return (
    <div className="all-exercises">
      <Header title={"All Exercises"} />
      <div className="holder flex">
        <div className="holder-left">
        <div className="new-exercise flex">
              <a href="#newexercise" className="btn-shape btn-effect c-white flex items-center" onClick={()=>{}}>
                <img src={AddPostIcon} alt="Icon" className="new-exercise-icon"/>
                New Exercise
              </a>
          </div>
          {
            noExercises ? <h1 className="p-10 rad-16 bg-primary c-white">No Exercises</h1>
            :
          exercises.length>0 ?
              exercises.map(e => <Exercise key={e._id} exercise={e} />)
              :
              error ? <h1 className="p-10 rad-16 bg-primary c-white">Error occured...!</h1>
              :
            <div className="loader">
              <ReactLoading type="bars" color="#fe6e0e" height={300} width={200} />
            </div>
          }
        </div>
        <div id="newexercise" className="holder-right flex flex-col bg-white rad-16">
          <AddExerciseForm />
        </div>
      </div>
    </div>
  );
}

export default AllExercises;
