import React from "react";

function Header() {
  return (
    <div className="Header">
      <header>
        <div className="logo">
          <p>Mariya Baig</p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#bottom">Projects</a>
            </li>
            <li>
              <a href="#middle">Skills</a>
            </li>
            <li>
              <a href="https://github.com/supermarios77">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </nav>
        <button className="cta">
          <a href="mailto:supermariyabros@gmail.com">Hire Me</a>
        </button>
      </header>
    </div>
  );
}

export default Header;
