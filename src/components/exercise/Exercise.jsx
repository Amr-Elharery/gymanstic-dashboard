import "./Exercise.css";
function Exercise({exercise}) {
    let {_id, trainingName, image, description, count, time, focusArea} = exercise;
  return (
    <div className={`exercise bg-white p-10 rad-16 shadow flex flex-col exercise-${_id}`}>
        <div className="exercise-head flex">
            <div className="img">
                <img src={image} alt="exercise" />
            </div>
            <div className="info">
                <h4 className="trainingName">
                    {trainingName}
                </h4>
                <div className="type">
                    Exercise
                </div>
            </div>
        </div>

        <div className="exercise-body">
            <div className="description">
                <h4>
                    Description
                </h4>
                <p>
                    {description}
                </p>
            </div>

        </div>

        <div className="exercise-foot flex flex-col rad-16">
                <div className="time flex flex-between">
                    <p>Time/Count</p>
                    <p>{count? count + " repeate" : ""} {time ? time + "s": ""}</p>
                </div>
                <span className="horizontal-line"></span>
                <div className="degree flex flex-between">
                    <p>Focus area</p>
                    <p>{focusArea.map((area, i) => (i === focusArea.length-1 ? area: area+" - "))}</p>
                </div>
        </div>
    </div>
  )
}

export default Exercise;