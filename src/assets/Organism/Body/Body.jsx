import React from "react";
import "../Body/Body.css";
import Bodyimage from "../../Multimedia/Boimage.png";
import Note from "../../Molecula/Note";
import "@south-paw/typeface-minecraft";
const Body = () =>{
    return(
        <div>
            <Note/>
            <img id="Imagen" src={Bodyimage} alt="" />
            <div>
            <button id="BttnPrin">Empezar</button>
            </div>
        </div>
    );
}
export default Body;