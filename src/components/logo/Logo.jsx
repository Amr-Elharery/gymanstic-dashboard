import "./Logo.css";
import logo from "../../assets/imgs/logo.png";
function Logo({width}) {
  return (
        <div className="logo">
            <img src={logo}alt="logo" style={{width}} />
        </div>
  )
}

export default Logo;