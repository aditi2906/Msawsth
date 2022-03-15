import React, { Component } from 'react';
import { MenuItems } from "../Objects/MenuItems"
import {Link as Scroll} from "react-scroll"
import './Navbar.css'
import AuthBtn from '../AuthBtn';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <Link to='/'><h1 className="navbar-logo">MediName<i className="fab fa-react"></i></h1></Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                            <a to={item.url} className={item.cName} spy={true} smooth={true} href={item.url}>{item.title}</a>
                                   
                            </li>


                        ) 
                    })}
                </ul>
                <div className="log-btn">
               <AuthBtn/>
             </div>
            </nav>
        )
    }
}

export default Navbar
