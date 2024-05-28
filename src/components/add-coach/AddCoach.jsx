import Select from 'react-select';
import './AddCoach.css';
import { useState } from 'react';
import Swal from 'sweetalert2';
function AddCoach() {
  let [userRole, setUserRole] = useState("");
  let [userName, setUserName] = useState("");
  let [userEmail, setUserEmail] = useState("");
  let [userPassword, setUserPassword] = useState("");
  let [userPhone, setUserPhone] = useState("");
  let [userWeight, setUserWeight] = useState("");
  let [userGender, setUserGender] = useState("");
  const options = [
    { value: 'user', label: 'User' },
  ];
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  function submitForm(e){
    e.preventDefault();
    if(userName && userPassword && userEmail && userRole && userPhone && userWeight && userGender){
      let user = {
        userName,
        userPassword,
        userEmail,
        userPhone,
        userRole,
        userWeight,
        userGender,
      }
      console.log(user);
      setUserRole("");
      setUserName("");
      setUserEmail("");
      setUserPassword("");
      setUserPhone("");
      setUserWeight("");
      setUserGender("");
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something in data is invalid!",
        footer: '<a href="#">Try again</a>'
      });
    }

  }
  return (
    <form className='add-coach rad-16 bg-white p-10 flex flex-col' onSubmit={(e) => submitForm(e)}>
        <div className="head flex items-center">
          <div className="img rad-16 bg-white p-10 shadow">
            <div className="inner rad-16"></div>
          </div>

          <div className="flex flex-col">
            <h3>Role</h3>
            <Select options={options}
              isClearable
              isSearchable
              placeholder="Select Role"
              onChange={(e) => e.value ?setUserRole(e.value) : ""}
              />
          </div>
        </div>

        <div className="name flex flex-col">
          <h3>Name</h3>
          <div className="input border-black rad-6">
            <input type="text" name="user-name"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div className="email flex flex-col">
          <h3>Email</h3>
          <div className="input border-black rad-6">
            <input type="email" name="user-email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="password flex flex-col">
          <h3>Password</h3>
          <div className="input border-black rad-6">
            <input type="password" name="user-password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="password flex flex-col">
          <h3>Phone Number</h3>
          <div className="input border-black rad-6">
            <input type="tel" name="user-phone"
              onChange={(e) => setUserPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-between">
          <div className="input flex flex-col">
            <h3>Weight</h3>
            <div className="input border-black rad-6">
              <input type="number" name="user-weight"
                onChange={(e) => setUserWeight(e.target.value)}
              />
            </div>
          </div>
          <div className="input flex flex-col">
            <h3>Gender</h3>
              <Select 
              options={genderOptions}
              isClearable
              isSearchable
              onChange={(e) => e.value ? setUserGender(e.value) : ""}
              />
          </div>
        </div>

        <button className="save-btn btn-shape btn-effect w-fit c-white">
            Save
          </button>
    </form>
  )
}

export default AddCoach;