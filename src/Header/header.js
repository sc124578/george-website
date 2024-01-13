import React, { useState, useEffect } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import headerIMG from "../Images/Great Cherry trees 1.jpg"

export default function Header() {

const [menu, setMenu] = useState(false);
const location = useLocation();

const toggleMenu = () => {
    setMenu(!menu);
}

useEffect(() => {
    setMenu(false)
}, [location]);

    return (
        <div className="header">
            <div className="header-container">
                <div className="header-content">
                    <div className="headerH1">
                    <h1 className="misadhi">Misadhi</h1>
                    <h1 className="coffee">Coffee</h1>
                    <h1 className="growers">Growers</h1>
                    </div>
                <div className="Header-IMG">
                    <img src={headerIMG} alt="headerIMG" className="headerIMG" />
                </div>
                </div>
                <div className="header-links">
                    {window.innerWidth < 500 ? (
                        <nav class="navbar navbar-dark bg-dark">
                            <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                <span className="navbar-toggler-icon"></span>
                            </button>
                            {menu && (
                                <div className="navbar-collapse">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">
                                            <button type="button" class="btn btn-light">Home</button>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/about" className="nav-link">
                                            <button type="button" class="btn btn-light">About</button>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/team" className="nav-link">
                                            <button type="button" class="btn btn-light">Team</button>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/goals" className="nav-link">
                                            <button type="button" class="btn btn-light">Goals</button>
                                            </Link>
                                        <li className="nav-item">
                                            <Link to="/quality" className="nav-link">
                                            <button type="button" class="btn btn-light">Quality</button>
                                            </Link>
                                        </li>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/contact" className="nav-link">
                                            <button type="button" class="btn btn-light">Contact</button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                       </nav>
                    ) : (
                        <nav class="navbar navbar-dark bg-dark" id="buttonBar">
                            <Link to="/" className="navbar-brand">
                            <button type="button" class="btn btn-light">Home</button>
                            </Link>
                            <Link to="/about" className="navbar-brand">
                            <button type="button" class="btn btn-light">About</button>
                            </Link>
                            <Link to="/team" className="navbar-brand">
                            <button type="button" class="btn btn-light">Team</button>
                            </Link>
                            <Link to="/goals" className="navbar-brand">
                            <button type="button" class="btn btn-light">Goals</button>
                            </Link>
                            <Link to="/quality" className="navbar-brand">
                            <button type="button" class="btn btn-light">Quality</button>
                            </Link>
                            <Link to="/contact" className="navbar-brand">
                            <button type="button" class="btn btn-light">Contact</button>
                            </Link>
                        </nav> 
                    )}
                    
                </div>
            </div>
        </div>
    )
}