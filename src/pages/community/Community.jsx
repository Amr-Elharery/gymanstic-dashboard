import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import WhatIsHappening from "../../components/what-is-happening/WhatIsHappening";
import AddPostIcon from "../../assets/imgs/add-post-icon.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Community.css";
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
              <a href="#newpost" className="btn-shape btn-effect c-white flex items-center" onClick={()=>{}}>
                <img src={AddPostIcon} alt="Icon" className="new-post-icon"/>
                New Post
              </a>
            </div>

            <Posts />
          </div>
          <div id="newpost" className="holder-right flex flex-col">
            <WhatIsHappening />
          </div>
        </div>
    </div>
  )
}

export default Community;