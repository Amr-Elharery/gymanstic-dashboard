import { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import PlusIcon from "../../assets/imgs/plus-icon.png";
import './AddExerciseForm.css';

function AddExerciseForm() {
  const animatedComponents = makeAnimated();

  let [selectedAge, setSelectedAge] = useState("");
  let [selectedLevel, setSelectedLevel] = useState("");

  let [collection, setCollection] = useState("");
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");

  let ageOptions = [
    {value: 'selected', label: 'Selected'}
  ]
  let levelOptions = [
    {value: 'selected', label: 'Selected'}
  ]

  const inputStyle = {
      border:"1px solid var(--primary-color)",
      borderRadius:"16px",
      padding:"5px",
  }


  function submit(e){
    e.preventDefault();
    if (selectedAge && selectedLevel && collection && name && description) {
      let data = {selectedAge, selectedLevel, collection, name, description};
      console.log(data);
    }
    else{
      console.log("Data is not valid");
    }
  }

  return (
    <form className='add-exercise-form p-10 flex flex-col' onSubmit={(e)=>submit(e)}>
          <div className="selects flex flex-between">
            <div className="age flex flex-col">
              <h3 className="bold">
                Age
              </h3>
              <Select options={ageOptions} onChange={(e)=> e ? setSelectedAge(e.value) : undefined} 
                isClearable 
                isSearchable
                components={animatedComponents}
                styles={{
                control: (styles) => ({...styles, 
                  ...inputStyle
              }),
              }}
              placeholder="Select"
              />
            </div>
            <div className="level flex flex-col">
              <h3 className="bold">
                Level
              </h3>
              <Select 
                options={levelOptions} onChange={(e)=> e ? setSelectedLevel(e.value) : undefined} 
                isClearable 
                isSearchable
                components={animatedComponents}
                styles={{
                control: (styles) => ({...styles, 
                  ...inputStyle
              }),
              }} 
              placeholder="Select"
              />
            </div>
          </div>
          <div className="collection flex flex-col">
            <h3>
              Collection
            </h3>
            <div className="collection-item flex items-center rad-16 border-primary p-10 w-fit">
              <input type="radio" name="collection" value={"new"} id="newCollection" onChange={(e)=>setCollection(e.target.value)}/>
              <label htmlFor="newCollection">New</label>
            </div>
            <div className="collection-item flex items-center rad-16 border-primary p-10 w-fit">
              <input type="radio" name="collection" value={"old"} id="oldCollection" onChange={(e)=>setCollection(e.target.value)} />
              <label htmlFor="oldCollection">Old</label>
            </div>
          </div>
          
          <div className="name flex flex-col">
            <h3>Name</h3>
            
            <div>
              <input 
              type="text"
              name="name"
              id="name"
              placeholder='Name'
              className='border-primary p-10 rad-16'
              onChange={(e)=>(setName(e.target.value))}
              />
            </div>
          </div>

          <div className="description flex flex-col">
            <h3>Description</h3>
            
            <div>
              <textarea 
                name="description"
                id="description"
                placeholder='Description'
                className='border-primary p-10 rad-16 w-full'
                onChange={(e)=>(setDescription(e.target.value))}
                >
                </textarea>
            </div>
          </div>

          <div className="add-file flex">
            <div className="add-image flex flex-col">
              <h3>Add Image</h3>
              <input type="file" name="photo" id="photo" className="hidden" />
              <label htmlFor="photo" className="flex items-center justify-center p-10 rad-16 bg-white shadow">
                <div className="icon flex items-center justify-center rad-16">
                  <img src={PlusIcon} alt="icon" />
                </div>
              </label>
            </div>
            <div className="add-video flex flex-col">
              <h3>Add Video</h3>
              <input type="file" name="video" id="video" className="hidden" />
              <label htmlFor="video" className="flex items-center justify-center p-10 rad-16 bg-white shadow">
                <div className="icon flex items-center justify-center rad-16">
                  <img src={PlusIcon} alt="icon" />
                </div>
              </label>
            </div>
          </div>

          <button className='bg-primary btn-shape w-fit c-white flex items-center'>
              <img src={PlusIcon} alt="icon" />
              Add new exercise
          </button>
    </form>
  )
}

export default AddExerciseForm;