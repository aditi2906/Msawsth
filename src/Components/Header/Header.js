import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GoogleAuth } from "../../services/Auth";
import bg from "../../assets/bg.png";
import { Button } from "../Button/Button";
import Footer from "../Footer/Footer";
import { BiPlay } from "react-icons/bi";
import About from "./About";
import "./Header.css";
import { UserContext } from "../../context/userContext";
function Header() {
  const { user } = useContext(UserContext);

  return (
    <>
    <div className="container">
      <div className="head-line">
        <h1>
          Track your medicines
          <br /> and Salts{" "}
        </h1>
        <div className="button">
          {user ? (
            <><Link to='/Table'>
              <button className="btn-use" color="#fff">
                Watch Tables
              </button></Link>
            </>
          ) : (
            <button
              className="btn-use"
              onClick={() => {
                GoogleAuth();
              }}
            >
              Get Started
              <BiPlay />
            </button>
          )}
        </div>
      </div>
      <img
        className="img"
        src={bg}
        width={500}
        height={400}
        alt="Medicine List"
      />
     <About/>
    </div>
    <Footer/>
    </>
   
  );
}

export default Header;
