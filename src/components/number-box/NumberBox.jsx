import "./NumberBox.css";
function NumberBox({icon, title, value}) {
  return (
    <div className="number flex flex-col rad-16 shadow">
        <div className="icon bg-primary rad-full w-fit">
            <img src={icon} alt="dashboard" />
        </div>
        <p className="title">{title}</p>
        <p className="value">{value}</p>
    </div>
  )
}

export default NumberBox