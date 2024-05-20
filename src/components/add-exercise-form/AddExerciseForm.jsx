import './AddExerciseForm.css';
function AddExerciseForm() {
  return (
    <>
         <div className="flex flex-between">
            <div className="age flex flex-col">
              <label htmlFor="ageSelect" className="bold">
                Age
              </label>
              <select name="ageSelect" id="ageSelect" className="border-primary rad-16">
                <option value="selected">
                  Selected
                </option>
              </select>
            </div>
            <div className="level flex flex-col">
              <label htmlFor="levelSelect" className="bold">
                Level
              </label>
              <select name="levelSelect" id="levelSelect" className="border-primary rad-16">
                <option value="selected">
                  Selected
                </option>
              </select>
            </div>
          </div>
          <div className="collection flex flex-col"></div>
    </>
  )
}

export default AddExerciseForm;