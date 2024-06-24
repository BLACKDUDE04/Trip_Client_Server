import "../Login/login.css"
import React, {useState} from 'react';
import video from '../../Assets/login.mp4'
import { Link,useNavigate } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import Axios from 'axios'

const Signup = () => {

    const [email,setEmail]= useState('')
    const [userName,setUserName]= useState('')
    const [password,setPassword]= useState('')
    const navigateTo = useNavigate()

    const createUser = ()=>{
        Axios.post('http://localhost:3002/signup',{
            Email: email,
            UserName: userName,
            Password: password
        }).then(()=>{
            navigateTo('/login')
            
            setEmail('')
            setUserName('')
            setUserName('')
        })

    }


  return (
   <div className="signupPage flex">
    <div className="container flex">
        <div className="vidoeDiv">
            <video src={video} autoPlay muted loop></video>

            <div className="textDiv">
                <h2 className="title">Plan Your Best Trip</h2>
            </div>
            <div className="footerDiv flex">
                <span className="text">Already have an account?</span>
                <Link to={'/Login'}>
                    <button className="btn">
                        Log in
                    </button>
                </Link>
            </div>
        </div>

        <div className="formDiv flex">
            <div className="headerDiv">
                <img src={logo} alt="Logo" />
                <h3>Welcome User</h3>
            </div>
        </div>

        <div className="form grid">

            <div className="inputDiv">
                <label htmlFor="username">Enter Username</label>
                <FaUserShield className="icon"/>
                <input type="text" id='username' placeholder="Enter Username" onChange={(event)=>{
                    setUserName(event.target.value)
                }}/>
            </div>
            <div className="inputDiv">
                <label htmlFor="email">Enter E-mail</label>
                <HiOutlineMail className="icon"/>
                <input type="email" id='email' placeholder="Enter E-mail" onChange={(event)=>{
                    setEmail(event.target.value)
                }}/>
            </div>


            <div className="inputDiv">
            <label htmlFor="password">Enter Password</label>
                <BsFillShieldLockFill className="icon"/>
                <input type="text" id='password' placeholder="Enter password" onChange={(event)=>{
                    setPassword(event.target.value)
                }}/>
            </div>

            <button type="submit" className="btn flex" onClick={createUser}>
                <span>Sign Up</span>
                <AiOutlineSwapRight className="icon"/>
            </button>

           
        
        </div>


    </div>
   </div>
  );
}
export default Signup