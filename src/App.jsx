import React from 'react'
import { useState } from 'react'
import Header from './assets/Organism/Header/Header'
import Body from './assets/Organism/Body/Body'
import wallpaper from "../src/assets/Multimedia/wallpaper.png"
import wallpaper2 from "../src/assets/Multimedia/wallpaper2.png"
import video from "../src/assets/Multimedia/video.webm"
import "./App.css"
function App() {

  const Image = wallpaper;
  const Image2 = wallpaper2;
  const Video = video;
  const [background, setbackground] = useState(Image);


   const changeBackground = (prop) => {
      setbackground(prop);
   }
  return (
    <>
    <div style={{backgroundImage:`url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', width: "100%" ,height: '98vh', margin: '0', padding: '0', zIndex: '-1', overflow: "hidden"}}>
    <Header/>
    <button id='boton0' onClick={()=>changeBackground(Image)}>
    </button>
    <button id='boton1' onClick={()=>changeBackground(Image2)}>
    </button>
    <button id='boton2' onClick={()=>changeBackground(Video)}>
    </button>
    <Body/>
    </div>
    {background === video && (
        <video autoPlay muted loop style={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '95%', zIndex: '-1', objectFit: 'cover' }}>
          <source src={video} type="video/webm" />
        </video>
      )} 
    </>
  )
}

export default App
