import "./Exercise.css";
function Exercise({exercise}) {
    let {id, name, type, image, describtion, time, degree} = exercise;
  return (
    <div className={`exercise bg-white p-10 rad-16 shadow flex flex-col exercise-${id}`}>
        <div className="exercise-head flex">
            <div className="img">
                <img src={image} alt="exercise" />
            </div>
            <div className="info">
                <h4 className="name">
                    {name}
                </h4>
                <div className="type">
                    {type}
                </div>
            </div>
        </div>

        <div className="exercise-body">
            <div className="describtion">
                <h4>
                    Describtion
                </h4>
                <p>
                    {describtion}
                </p>
            </div>

        </div>

        <div className="exercise-foot flex flex-col rad-16">
                <div className="time flex flex-between">
                    <p>Time</p>
                    <p>{time}</p>
                </div>
                <span className="horizontal-line"></span>
                <div className="degree flex flex-between">
                    <p>Degree</p>
                    <p>{degree}</p>
                </div>
        </div>
    </div>
  )
}

export default Exercise;