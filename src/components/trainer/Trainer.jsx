import "./Trainer.css"

function Trainer({image, name}) {
  return (
    <div className="trainer flex flex-col items-center">
        <div className="img">
            <img src={image} alt="trainer" className="rad-full"/>
        </div>
        <div className="name">
            {name}
        </div>
    </div>
  )
}

export default Trainer