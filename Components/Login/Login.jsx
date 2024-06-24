import "./login.css"
import React, {useEffect, useState} from 'react';
import video from '../../Assets/login.mp4'
import {Link,  useNavigate} from 'react-router-dom'
import logo from '../../Assets/logo.png'
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import Axios  from "axios";

const Login =() => {
  
    const [loginUserName,setLoginUserName]= useState('')
    const [loginPassword,setLoginPassword]= useState('')
    const navigateTo = useNavigate()

    const [loginStatus, setLoginStatus] = useState('')
    const [statusHolder, setStatusHolder] = useState('message') 


    const loginUser = (e)=>{

        e.preventDefault();
        Axios.post('http://localhost:3002/login',{
           
            LoginUserName: loginUserName,
            LoginPassword: loginPassword
        }).then((response)=>{
            console.log()

            if(response.data.message || loginUserName == '' || loginPassword == '' ){
                navigateTo('/Signup')
                setLoginStatus('Credential dont exist')
            }
            else{
                navigateTo('/')
            }
        })

    }
    useEffect(()=>{
        if(loginStatus !== ''){
            setStatusHolder('showMessage')
            setTimeout(()=>{
                setStatusHolder('message')
            }, 4000);
        }
    },[loginStatus])

    const onSubmit = ()=>{
        setLoginUserName('')
        setLoginPassword('')
    }

  return (
   <div className="loginPage flex">
    <div className="container flex">
        <div className="vidoeDiv">
            <video src={video} autoPlay muted loop></video>

            <div className="textDiv">
                <h2 className="title">Plan Your Best Trip</h2>
            </div>
            <div className="footerDiv flex">
                <span className="text">Don't have an account?</span>
                <Link to={'/Signup'}>
                    <button className="btn">
                        Sign Up
                    </button>
                </Link>
            </div>
        </div>

        <div className="formDiv flex">
            <div className="headerDiv">
                <img src={logo} alt="Logo" />
                <h3>Welcome Back!</h3>
            </div>
        </div>

        <div className="form grid" onSubmit={onSubmit}>
            <span className={statusHolder}>{loginStatus}</span>

            <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <FaUserShield className="icon"/>
                <input type="text" id='username' placeholder="Username" onChange={(event)=>{
                    setLoginUserName(event.target.value)
                }}/>
            </div>

            <div className="inputDiv">
            <label htmlFor="password">Password</label>
                <BsFillShieldLockFill className="icon"/>
                <input type="text" id='password' placeholder="password" onChange={(event)=>{
                    setLoginPassword(event.target.value)
                }}/>
            </div>

            <button type="submit" className="btn flex" onClick={loginUser}>
                <span>Login</span>
                <AiOutlineSwapRight className="icon"/>
            </button>

            <span className="forgotPassword">
                Forgot your password? <a href="">Click Here</a>
            </span>
        
        </div>


    </div>
   </div>
  );
}
export default Login