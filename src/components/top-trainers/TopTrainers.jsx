import Trainer from "../trainer/Trainer";
import ReactLoading from "react-loading"
import "./TopTrainers.css";

import { useEffect, useState } from "react";


function sortCoachesByRating(coaches) {
  return coaches.sort((a, b) => b.rating - a.rating);
}
function TopTrainers() {
  const [coaches, setCoaches] = useState([]);

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

  useEffect(()=>{
    if(id&&token){
      fetch(`https://gymnastic-beta.vercel.app/api/v1/users?role=coach`, {
        headers: {
            Authorization: `Bearer ${token}`
          } 
      }).then(res => res.json())
        .then(resObj => {
          setCoaches(sortCoachesByRating(resObj.data));
      })
      .catch(err => {
        console.log(err)
      })
    }
  }, [id, token])

  return (
    <div className="top-trainers flex flex-col">
        <div className="upper flex flex-between items-center">
            <h2>Top Trainers</h2>
            <p className="c-primary">View All</p>
        </div>
        <div className="lower">
          <div className="trainers flex justify-center">
            {
            coaches.length > 0?
            coaches.map(coach => (
              <Trainer key={coach.id} name={coach.name} image={coach.profileImg.url} />
            ))
            :
            <div className="trainers-loader">
              <ReactLoading type="bars" color="#fe6e0e" height={100} width={100} />
            </div>
            }
          </div>
        </div>
    </div>
  )
}

export default TopTrainers;