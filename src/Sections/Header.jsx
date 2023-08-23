import React from "react";

const Header = () => {
  const navWrapper = document.querySelector(".nav__wrapper__ul");
  const toggleNav = () => {
    navWrapper.classList.toggle("nav_active");
  };
//   const navlists = [
//     {href:"#header",navListName:'Home'},
//     {href:"#about",navListName:'About'},
//     {href:"#education",navListName:'Experiance'},
//     {href:"#project",navListName:'Project'},
//     {href:"#blogs",navListName:'Blogs'},
//   ]
  return (
    <header className="header" id="header">
      <nav className="nav" id="nav">
        <div className="nav__wrapper">
          <div className="nav__wrapper__logo">
            <a href="#header" className="nav__wrapper__logo__brand">
              Sujon
            </a>
          </div>
          <ul className="nav__wrapper__ul ">
            <li className="nav__wrapper__ul__li">
              <a href="#header" className="nav__wrapper__ul__li__a active">
                Home
              </a>
            </li>
            <li className="nav__wrapper__ul__li">
              <a href="#about" className="nav__wrapper__ul__li__a">
                About
              </a>
            </li>
            <li className="nav__wrapper__ul__li">
              <a href="#education" className="nav__wrapper__ul__li__a">
                Experiance
              </a>
            </li>
            <li className="nav__wrapper__ul__li">
              <a href="#project" className="nav__wrapper__ul__li__a">
                Project
              </a>
            </li>
            <li className="nav__wrapper__ul__li">
              <a href="#blogs" className="nav__wrapper__ul__li__a">
                Blogs
              </a>
            </li>
          </ul>
          <div onClick={toggleNav} className="nav__wrapper__toggle">
            <i className="bi bi-text-right"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
