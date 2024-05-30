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
function Post({post}) {
    const {userName, date, body, likes, comments, shares} = post;
  return (
        <div className="post bg-white rad-16">
            <div className="post-head flex flex-between p-10">
                <div className="left flex">
                    <div className="profile-image">
                        <img src={ProfileImage} alt="profile" />
                    </div>
                    <div className="post-user flex flex-col">
                        <h3>{userName}</h3>
                        <p>{date} <img src={WorldIcon} alt="icon" /></p>
                    </div>
                </div>
                <div className="icon">
                    <img src={PenIcon} alt="icon" />
                </div>
            </div>
            <div className="post-body">
                <p className="p-10">{body}</p>

                <div className="img">
                    <img src={PostImage} alt="post" />
                </div>
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
                            {likes}
                        </p>
                    </div>
                    <div className="comments">
                        {comments} Comments
                    </div>
                    <div className="shares">
                        {shares} Shares
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