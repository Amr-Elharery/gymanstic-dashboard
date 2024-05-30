import TrashIcon from "../../assets/imgs/trash-icon.png";
import EyeIcon from "../../assets/imgs/eye-icon.png";
import "./PostInformation.css";
function PostInformation() {
  return (
            <div className="post-information p-10 bg-white rad-16 shadow">
                <h3 className="flex justify-center">Post Information</h3>

                <p className="bold">Post ID: 4542184</p>
                <p className="bold">User ID: 4542184</p>
                <p className="bold">User Name: Ahmed Ali</p>

                <div className="buttons flex flex-between">
                    <button className="btn-shape btn-effect c-white flex items-center">
                        <img src={TrashIcon} alt="Trash icon" />
                        DELETE
                    </button>
                    <button className="btn-shape btn-effect c-white flex items-center">
                        <img src={EyeIcon} alt="Trash icon" />
                        SHOW/HIDE
                    </button>
                </div>
            </div>
  )
}

export default PostInformation