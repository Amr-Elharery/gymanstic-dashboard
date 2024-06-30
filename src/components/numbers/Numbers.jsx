import React, { useEffect, useState } from 'react'
import NumberBox from '../number-box/NumberBox';
import numberOfUsersIcon from "../../assets/imgs/user-icon.png";
import numberOfCoachIcon from "../../assets/imgs/number-of-coach-icon.png";
import numberOfPostsIcon from "../../assets/imgs/number-of-posts-icon.png";
import numberOfExercisesIcon from "../../assets/imgs/number-of-exercises-icon.png";

import "./Numbers.css";
function Numbers() {
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [numberOfCoach, setNumberOfCoach] = useState(0);
  const [numberOfCategories, setNumberOfCategories] = useState(0);
  const [numberOfPosts, setNumberOfPosts] = useState(0);
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
  // Fetch data from API here using the token and id
  useEffect(()=>{
    if(id&&token){
      fetch(`https://gymnastic-beta.vercel.app/api/v1/users`, {
        headers: {
            Authorization: `Bearer ${token}`
          } 
      }).then(res => res.json())
        .then(resObj => {
          setNumberOfUsers(resObj.results)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }, [id, token])

  useEffect(()=>{
    if(id&&token){
      fetch(`https://gymnastic-beta.vercel.app/api/v1/users?role=coach`, {
        headers: {
            Authorization: `Bearer ${token}`
          } 
      }).then(res => res.json())
        .then(resObj => {
          setNumberOfCoach(resObj.results)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }, [id, token])
 
  useEffect(()=>{
    if(id&&token){
      fetch(`https://gymnastic-beta.vercel.app/api/v1/category-exercises`, {
        headers: {
            Authorization: `Bearer ${token}`
          } 
      }).then(res => res.json())
        .then(resObj => {
          setNumberOfCategories(resObj.count)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }, [id, token])

  useEffect(()=>{
    if(id&&token){
      fetch(`https://gymnastic-beta.vercel.app/api/v1/posts/allposts`, {
        headers: {
            Authorization: `Bearer ${token}`
          } 
      }).then(res => res.json())
        .then(resObj => {
          let posts = resObj.post;
          setNumberOfPosts(posts.length);
        })
      .catch(err => {
        console.log(err)
      })
    }
  }, [id, token])


  return (
    <div className="numbers flex">
    <NumberBox icon={numberOfUsersIcon} title={"Number of Users"} value={numberOfUsers} />
    <NumberBox icon={numberOfCoachIcon} title={"Number of Coach"} value={numberOfCoach} />
    <NumberBox icon={numberOfExercisesIcon} title={"Exercises's Categories"} value={numberOfCategories} />
    <NumberBox icon={numberOfPostsIcon} title={"Number of Posts"} value={numberOfPosts} />
  </div>
  )
}

export default Numbers;