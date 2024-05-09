import "./UserImage.css";
function UserImage({Image}) {
  return (
    <div className="user-img">
    <img src={Image} alt="User" />
  </div>
  )
}

export default UserImage;