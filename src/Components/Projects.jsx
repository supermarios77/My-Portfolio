import React from 'react';
import  Lottie from 'lottie-react';
import list from "../assets/List.json";
import Coins from "../assets/Coins.json";

function Projects() {
  return (
    <div className="Projects">
      <div className="project-header">
        <h1>My Projects</h1>
      </div>
       <div className="project">

        <Lottie className='icon' animationData={list} />  
        <p><a href="https://todolist-gi5k.onrender.com/">To Do List Project</a></p>
       </div>

       <div className="project">
        <Lottie className='icon' animationData={Coins} />  
        <p><a href="/">Cryptick - Crypto Ticker Project</a></p>
       </div>

    </div>
  )
}

export default Projects