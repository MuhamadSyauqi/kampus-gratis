import React from 'react'
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import '../../assets/user/css-custom/landing-page-3.css';


const Header4 = () => {
  return (
    <header className="navbar-light navbar-sticky fixed-top header-static shadow">
      <div className="navbar navbar-expand-xl">
        <div className="container-fluid px-3 px-xl-5">
          <NavLink to="" className="navbar-brand p-3">
            <img
              className="light-mode-item navbar-brand-item"
              src="assets/images/kgLogo.png"
              alt="logo"
            />
            <img
              className="dark-mode-item navbar-brand-item"
              src="assets/images/kgLogo.png"
              alt="logo"
            />
          </NavLink>

          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-animation">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
            <ul className="navbar-nav navbar-nav-scroll "></ul>
            <ul className="navbar-nav navbar-nav-scroll">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link "
                  to="home-section1"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  STUDI-KU
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="pagesMenu"
                  to="fakultas-section1"
                  spy={true}
                  smooth={true}
                  duration={500}
                  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                >
                  EXPLORE
                </Link>
                <ul className="dropdown-menu mt-3" aria-labelledby="pagesMenu">
                  <li> <a className="dropdown-item" href="#">Tutorial & Artikel</a></li>
                  <li> <a className="dropdown-item" href="#">Event</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link "
                  to="mentor-section1"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  FAKULTAS
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link "
                  to="event-section1"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  AKUN
                </Link>
              </li>
            </ul>
            <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center ms-auto">
              <div className="nav-item w-100 ms-auto">
                <NavLink
                  to="/login"
                  className="btn-custom btn-sm mb-0 text-white py-2 px-3"
                >
                  Coba Sekarang
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header4