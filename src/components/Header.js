import React from "react";
import './Header.css';
import netflix_logo from "../netflix_logo.png";
import netflix_perfil from "../netflix_perfil.png";

export default ({black}) => {
    return (
        <header className={black ? 'black': ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={netflix_logo}></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src={netflix_perfil}></img>
                </a>
            </div>
        </header>
    );
} 