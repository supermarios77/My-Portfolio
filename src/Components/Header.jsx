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
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Skills</a>
            </li>
            <li>
              <a href="https://github.com/supermarios77">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </nav>
        <button className="cta">
          <a href="/">Hire Me</a>
        </button>
      </header>
    </div>
  );
}

export default Header;
