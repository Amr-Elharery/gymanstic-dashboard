import PenIcon from "../../assets/imgs/pen-icon.png";
import ProfileImage from "../../assets/imgs/profile-image.png";
import WorldIcon from "../../assets/imgs/world-icon.png";
import PostImage from "../../assets/imgs/post-photo.png";
import WhiteLikeIcon from "../../assets/imgs/white-like-icon.png";
import LoveIcon from "../../assets/imgs/love-icon.png";
import CareIcon from "../../assets/imgs/care-icon.png";
import LikeIcon from "../../assets/imgs/like-icon.png";
import CommentIcon from "../../assets/imgs/comment-icon.png";
import ShareIcon from "../../assets/imgs/share-icon.png";
import "./Post.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
function Post({post}) {
    const {user, text, likes, sharing, video} = post;
    const [userData, setUserData] = useState({});

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
        if(id && token){
            fetch(`https://gymnastic-beta.vercel.app/api/v1/users/${user}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
           .then(res => res.json())
           .then(resObj => {
            if(resObj.status === "success"){
                setUserData(resObj.data);
            }
           }).catch(err => {
            Swal.fire({
                title: 'Error',
                text: err.message + ' Failed to fetch user information',
                icon: 'error',
                confirmButtonText: 'Okay'

            })
           })
        }
    }, [id, token]);
  return (
        <div className="post bg-white rad-16">
            <div className="post-head flex flex-between p-10">
                <div className="left flex">
                    <div className="profile-image">
                        <img src={ProfileImage} alt="profile" />
                    </div>
                    <div className="post-user flex flex-col">
                        <h3>{userData.name || "Anonymous User"}</h3>
                        <p><img src={WorldIcon} alt="icon" /></p>
                    </div>
                </div>
                <div className="icon">
                    <img src={PenIcon} alt="icon" />
                </div>
            </div>
            <div className="post-body">
                <p className="p-10">{text}</p>

                {
                    video.length > 0 ? 
                    <div className="vid">
                        <video src={video[0].url} alt="post" />
                    </div>
                    : ""
                }
                <div className="statistics flex flex-between p-10">
                    <div className="likes flex items-center">
                        <div className="icons flex items-center">

                            <div className="icon-container-like flex items-center justify-center rad-full bg-white p-5">
                            <div className="icon like flex items-center justify-center rad-full">
                                <img src={WhiteLikeIcon} alt="icon" />
                            </div>
                            </div>

                            <div className="icon-container-love flex items-center justify-center rad-full bg-white p-5">
                            <div className="icon love flex items-center justify-center rad-full">
                                <img src={LoveIcon} alt="icon" />
                            </div>
                            </div>

                            <div className="icon-container-care flex items-center justify-center rad-full bg-white p-5">
                            <div className="icon care flex items-center justify-center rad-full">
                                <img src={CareIcon} alt="icon" />
                            </div>
                            </div>
                            
                        </div>
                        <p>
                            {likes.length}
                        </p>
                    </div>
                    <div className="comments">
                        {0} Comments
                    </div>
                    <div className="shares">
                        {sharing.length} Shares
                    </div>
                </div>

                <span className="horizontal-line"></span>
            </div>

            <div className="post-foot p-10 flex flex-between">
                <div className="flex items-center justify-center">
                    <img src={LikeIcon} alt="icon" />
                    Like
                </div>
                <div className="flex items-center justify-center">
                    <img src={CommentIcon} alt="icon" />
                    Comment
                </div>
                <div className="flex items-center justify-center">
                    <img src={ShareIcon} alt="icon" />
                    Share
                </div>
            </div>
        </div>
  )
}

export default Post