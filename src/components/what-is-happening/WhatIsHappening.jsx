import GalleryIcon from "../../assets/imgs/gallery-icon.png";
import GifIcon from "../../assets/imgs/gif-icon.png";
import PollIcon from "../../assets/imgs/poll-icon.png";
import EmojiIcon from "../../assets/imgs/emoji-icon.png";
import ScheduleIcon from "../../assets/imgs/schedule-icon.png";
import "./WhatIsHappening.css";
function WhatIsHappening() {
  return (
    <div className="what-is-happening bg-white p-10 rad-16 shadow flex flex-col flex-between">
        <textarea placeholder="What's happening?" className="p-10">
        </textarea>
        
        <div className="flex flex-between">
            <div className="icons flex items-center">
                <img src={GalleryIcon} alt="icon" />
                <img src={GifIcon} alt="icon" />
                <img src={PollIcon} alt="icon" />
                <img src={EmojiIcon} alt="icon" />
                <img src={ScheduleIcon} alt="icon" />
            </div>
            <button className="btn-shape btn-effect c-white">Publish Post</button>
        </div>
    </div>
)
}

export default WhatIsHappening