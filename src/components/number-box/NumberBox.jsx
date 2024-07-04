import "./NumberBox.css";
import ReactLoading from "react-loading";
function NumberBox({icon, title, value}) {
  return (
    <div className="number flex flex-col rad-16 shadow">
        <div className="icon bg-primary rad-full w-fit">
            <img src={icon} alt="dashboard" />
        </div>
        <p className="title">{title}</p>
        <p className="value">
          {
            value>0?
            value
            :
            <div className="mini-loader">
              <ReactLoading type="bars" color="#fe6e0e" height={10} width={20} />
            </div>  
          }
        </p>
    </div>
  )
}

export default NumberBox