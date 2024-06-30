import { useEffect, useState } from "react";
import LoginImage from "../../assets/imgs/login-image.svg"
import ArrowRightIcon from "../../assets/imgs/arrow-right-icon.png"
import Logo from "../../components/logo/Logo";
import "./Login.css"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function Login() {
    let [userEmail, setUserEmail] = useState("");
    let [userPassword, setPassword] = useState("");
    let [keepLogin, setKeepLogin] = useState(false);

    const navigate = useNavigate();
  
  useEffect(()=>{
    if(localStorage.getItem("authorization") || sessionStorage.getItem("authorization")){
      navigate("/");
    }
  }, [navigate])

    function submit(e){
        e.preventDefault();
        if(userEmail && userPassword)
        {
            let data = {userEmail, userPassword, keepLogin}
            postData(data);
        }
        else
        {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something in data is invalid!",
                footer: '<a href="#">Try again</a>'
            })
        }
    }
    function postData(data){
        fetch("https://gymnastic-beta.vercel.app/api/v1/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email: data.userEmail, password: data.userPassword})
        })
       .then(res=>res.json())
       .then(resObj => {
        if(resObj.token){
            navigate("/");
        if(data.keepLogin)
            { 
                localStorage.setItem("authorization", JSON.stringify({
                    token:resObj.token,
                    id:resObj.data.id
                }));
            }
            else{
                sessionStorage.setItem("authorization", JSON.stringify({
                    token:resObj.token,
                    id:resObj.data.id
                }));
            }
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid username or password!",
                footer: '<a href="#">Try again</a>'
            })
        }
       });
    }
  return (
    <div className="login w-full flex items-center justify-center">
        <div className="img login-img">
            <img src={LoginImage} alt="login" />
        </div>
        <div className="flex flex-col items-center">
            <Logo width={100}/>

            <form className="bg-white rad-16 shadow flex flex-col" onSubmit={(e)=>submit(e)}>
                <h3>Login</h3>
                <p id="forgot">forgot password?</p>
                <div >
                    <input 
                        type="text"
                        placeholder="Email"
                        className="rad-6 p-10 border-black"
                        onChange={
                            (e)=>setUserEmail(e.target.value)
                        }
                        />
                </div>
                <div >
                    <input 
                        type="password"
                        placeholder="Password"
                        className="rad-6 p-10 border-black"
                        onChange={
                            (e)=>setPassword(e.target.value)
                        }
                        />
                </div>
                <div className="flex">
                <input type="checkbox" id="keep_login"
                onChange={(e)=>setKeepLogin(e.target.checked)}
                />
                <label htmlFor="keep_login">Keep login?</label>
                </div>

                <button className="btn-shape btn-effect c-white flex flex-between items-center">
                    Login

                    <div className="icon">
                        <img src={ArrowRightIcon} alt="icon" />
                    </div>
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login;