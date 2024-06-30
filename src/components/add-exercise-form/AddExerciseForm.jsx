import { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import PlusIcon from "../../assets/imgs/plus-icon.png";
import './AddExerciseForm.css';
import Swal from 'sweetalert2';

function AddExerciseForm() {
  const animatedComponents = makeAnimated();

  const [categoryId, setCategoryId] = useState("");
  const [id, setId] = useState("");
  const [token, setToken] = useState("");

  const [selectedAge, setSelectedAge] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedSector, setSelectedSector] = useState("");

  const [name, setName] = useState("");
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);
  const [description, setDescription] = useState("");
  const [focusArea, setFocusArea] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [animation, setAnimation] = useState(null);

  const ageOptions = [
    { value: '3-6', label: '3-6' },
    { value: '6-9', label: '6-9' },
    { value: '9-12', label: '9-12' },
    { value: '18-25', label: '18-25' },
  ];
  const levelOptions = [
    { value: 'Beginning', label: 'Beginning' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Advanced', label: 'Advanced' },
  ];
  const sectorOptions = [
    { value: 'Flexibility', label: 'Flexibility' },
    { value: 'Basic', label: 'Basic' },
    { value: 'Strength', label: 'Strength' },
  ];

  const inputStyle = {
    border: "1px solid var(--primary-color)",
    borderRadius: "16px",
    padding: "5px",
  };

  useEffect(() => {
    let authData = localStorage.getItem("authorization") || sessionStorage.getItem("authorization");

    if (authData) {
      authData = JSON.parse(authData);
      setId(authData.id);
      setToken(authData.token);
    }
  }, []);

  function submit(e) {
    e.preventDefault();
    if (id && token) {
      if (selectedAge && selectedLevel && selectedSector) {
        fetch(`https://gymnastic-beta.vercel.app/api/v1/category-exercises/onlySector?sector=${selectedSector}&age=${selectedAge}&level=${selectedLevel}`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }).then(res => res.json())
          .then(resObj => {
            if (resObj.count > 0) {
              setCategoryId(resObj.data[0]._id);
            }
          });
      }

      if (categoryId) {
        if (name && description && (time || count)) {
          const formData = new FormData();
          formData.append('exerciseId', categoryId);
          formData.append('name', name);
          formData.append('description', description);
          if (time) formData.append('time', time);
          if (count) formData.append('count', count);
          if (image) formData.append('image', image);
          if (video) formData.append('videoUrl', video);
          if (animation) formData.append('animationUrl', animation);
          if(focusArea) formData.append('focusArea', focusArea);

          fetch(`https://gymnastic-beta.vercel.app/api/v1/exercises`, {
            method: 'POST',
            headers: {
              "Authorization": `Bearer ${token}`
            },
            body: formData
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
            });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill in all required fields!",
            footer: '<a href="#">Try again</a>'
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please select a valid age, level, and sector!",
          footer: '<a href="#">Try again</a>'
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something in data is invalid!",
        footer: '<a href="#">Try again</a>'
      });
    }
  }

  return (
    <form className='add-exercise-form p-10 flex flex-col' onSubmit={(e) => submit(e)}>
      <div className="selects flex flex-col">
        <h2>Category data</h2>
        <div className="age flex flex-col">
          <h3 className="bold">
            Age
          </h3>
          <Select options={ageOptions} onChange={(e) => e ? setSelectedAge(e.value) : undefined}
            isClearable
            isSearchable
            components={animatedComponents}
            styles={{
              control: (styles) => ({ ...styles, ...inputStyle }),
            }}
            placeholder="Select"
          />
        </div>
        <div className="level flex flex-col">
          <h3 className="bold">
            Level
          </h3>
          <Select
            options={levelOptions} onChange={(e) => e ? setSelectedLevel(e.value) : undefined}
            isClearable
            isSearchable
            components={animatedComponents}
            styles={{
              control: (styles) => ({ ...styles, ...inputStyle }),
            }}
            placeholder="Select"
          />
        </div>
        <div className="sector flex flex-col">
          <h3 className="bold">
            Sector
          </h3>
          <Select
            options={sectorOptions} onChange={(e) => e ? setSelectedSector(e.value) : undefined}
            isClearable
            isSearchable
            components={animatedComponents}
            styles={{
              control: (styles) => ({ ...styles, ...inputStyle }),
            }}
            placeholder="Select"
          />
        </div>
      </div>

      <h2>Exercise data</h2>
      <div className="name flex flex-col">
        <h3>Name</h3>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder='Name'
            className='border-primary p-10 rad-16'
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setDescription(e.target.value)}
          >
          </textarea>
        </div>
      </div>

      <div className="focus-area flex flex-col">
        <h3>Focus Area</h3>
        <div>
          <input
            name="focus-area"
            id="focus-area"
            placeholder='Focus Area'
            className='border-primary p-10 rad-16 w-full'
            onChange={(e) => setFocusArea(e.target.value)}
          >
          </input>
        </div>
      </div>

      <div className="time-count flex flex-between">
        <div className="time">
          <h3>Time</h3>
          <input
            type="text"
            name="time"
            id="time"
            placeholder='Time'
            className='border-primary p-10 rad-16'
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div className="count">
          <h3>Count</h3>
          <input
            type="text"
            name="count"
            id="count"
            placeholder='Count'
            className='border-primary p-10 rad-16'
            onChange={(e) => setCount(e.target.value)}
          />
        </div>
      </div>

      <div className="add-file flex">
        <div className="add-image flex flex-col">
          <h3>Add Image</h3>
          <input type="file" name="photo" id="photo" className="hidden" onChange={(e) => setImage(e.target.files[0])} />
          <label htmlFor="photo" className="flex items-center justify-center p-10 rad-16 bg-white shadow">
            <div className="icon flex items-center justify-center rad-16">
              <img src={PlusIcon} alt="icon" />
            </div>
          </label>
        </div>
        <div className="add-video flex flex-col">
          <h3>Add Video</h3>
          <input type="file" name="video" id="video" className="hidden" onChange={(e) => setVideo(e.target.files[0])} />
          <label htmlFor="video" className="flex items-center justify-center p-10 rad-16 bg-white shadow">
            <div className="icon flex items-center justify-center rad-16">
              <img src={PlusIcon} alt="icon" />
            </div>
          </label>
        </div>
        <div className="add-animation flex flex-col">
          <h3>Add Animation</h3>
          <input type="file" name="animation" id="animation" className="hidden" onChange={(e) => setAnimation(e.target.files[0])} />
          <label htmlFor="animation" className="flex items-center justify-center p-10 rad-16 bg-white shadow">
            <div className="icon flex items-center justify-center rad-16">
              <img src={PlusIcon} alt="icon" />
            </div>
          </label>
        </div>
      </div>

      <button className='bg-primary btn-shape btn-effect w-fit c-white flex items-center'>
        <img src={PlusIcon} alt="icon" />
        Add new exercise
      </button>
    </form>
  );
}

export default AddExerciseForm;
