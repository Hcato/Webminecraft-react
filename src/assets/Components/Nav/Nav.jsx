import React from "react";
import { Link } from 'react-router-dom';
import "../Nav/Nav.css"
const Nav = () =>{
    return(
        <div className="buttons">
            <nav>
            <button>
                Game
            </button>
            <button>
                Shop
            </button>
            <button>
                Comunity
            </button>
            <button>
                Support
            </button>
            <Link to={"/login"} className="Accounts">
                    Account 🔒
                </Link>
            </nav>
        </div>
    );
}
export default Nav;