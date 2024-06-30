import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import PostInformation from "../../components/post-information/PostInformation";
import WhatIsHappening from "../../components/what-is-happening/WhatIsHappening";
import AddPostIcon from "../../assets/imgs/add-post-icon.png";
import "./Community.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Community() {
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(!(localStorage.getItem("authorization") || sessionStorage.getItem("authorization"))){
      navigate("/login");
    }
  }, [navigate])
  return (
    <div className="community">
        <Header title={"Community"} />
        <div className="holder flex">
          <div className="holder-left flex flex-col">
            <div className="new-post flex">
              <button className="btn-shape btn-effect c-white flex items-center" onClick={()=>{}}>
                <img src={AddPostIcon} alt="Icon" className="new-post-icon"/>
                New Post
              </button>
            </div>

            <Posts />
          </div>
          <div className="holder-right flex flex-col">
            <PostInformation />
            <span className="horizontal-line"></span>
            <WhatIsHappening />
          </div>
        </div>
    </div>
  )
}

export default Community;