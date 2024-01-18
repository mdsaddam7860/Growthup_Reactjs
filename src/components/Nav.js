import React from "react";
import { Link } from 'react-router-dom'


export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navzindex justify-content-center">
        <div className="container-fluid justify-content-center">
        <h3>
        <Link className="navbar-brand" to="/">
            GrowthUp
          </Link>
        </h3>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon justify-content-center"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-jc justify-content-center ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="service">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  Our Projcts
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact">
                  Contact Us
                </a>
              </li>
              {/* <li className="nav-item">
                <a href="/" className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>


  );
}
