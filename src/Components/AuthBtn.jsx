import React,{useContext} from 'react'
import {GoogleAuth,logout} from "../services/Auth"
import {FcGoogle} from "react-icons/fc"
import {FiLogOut} from "react-icons/fi"
import { UserContext } from '../context/userContext'
import {useNavigate } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import { GoogleLogout } from 'react-google-login'
import "./Header/Header.css"


function AuthBtn() {
  const {user} = useContext(UserContext);
  let navigate = useNavigate();
  return (
    <>
    {
      !!user?(
        <>
        <button className='btn-use' 
         onClick={()=>{
           logout();
           navigate("/");
        }} >{user.displayName} <span> <FiLogOut/></span></button>
        </>
      ):(
       
        <button className="btn-use" onClick={()=>{GoogleAuth().then(()=>{
          navigate("/Table")
        })}}>
            <FcGoogle size={20}/>
            <span>
            Sign In</span>
        </button>
      )

    }
       
    </>
  )
}

export default AuthBtn;