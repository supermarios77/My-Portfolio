import React from "react";

function Projects() {
  return (
    <div class="container">
      <h1 class="heading">My Projects</h1>

      <div class="box-container">
        <div class="box">
          <a href="https://todolist-gi5k.onrender.com/">
            <i class="fa-solid fa-clipboard-list"></i>
          </a>
          <h3>To Do List App</h3>
        </div>
      </div>

      <div className="box-container">
        <div className="box">
          <a href="https://rupaya-website.vercel.app/">
            <i class="fa-solid fa-coins"></i>
          </a>
          <h3>Rupaya Website</h3>
        </div>
      </div>
    </div>
  );
}

export default Projects;
