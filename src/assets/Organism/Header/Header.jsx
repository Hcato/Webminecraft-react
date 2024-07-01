import React from "react";
import Nav from "../../Components/Nav/Nav";
import Logo from "../../Multimedia/Logo.webp"
import "./Header.css"
const Header = () =>{
    return(
        <div className="basicpage">
            <div className="content">
           <img id="logo" src={Logo} alt="" />
            <Nav/>
            </div>
        </div>
    );
}
export default Header;