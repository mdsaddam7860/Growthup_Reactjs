import React from "react";
import {Link} from 'react-router-dom';

export default function Foter() {
  return (
    <>
      {/* <!-- Footer Start Here --> */}

      <footer id="ftr">
        <div className="containerFooter">
          <div className="sec aboutUs">
            <h2>About Us</h2>
            <p>
              GrowthUP is a dedicated startup consulting firm committed to
              empowering emerging businesses for unparalleled success. We offer
              tailored solutions, drawing from diverse industry expertise, to
              help startups thrive. From strategic planning to funding support,
              our comprehensive services enable startups to navigate challenges
              and seize opportunities for sustainable growth.
            </p>
            <ul className="sci">
              <li>
                <Link id="tab-1" to="/">
                  <ion-icon
                    name="logo-facebook"
                    className="whiteText"
                  ></ion-icon>
                </Link>
              </li>
              <li>
                <Link id="tab-2" to="/">
                  <ion-icon
                    name="logo-instagram"
                    className="whiteText"
                  ></ion-icon>
                </Link>
              </li>
              <li>
                <Link id="tab-3" to="/">
                  <ion-icon
                    name="logo-twitter"
                    className="whiteText"
                  ></ion-icon>
                </Link>
              </li>
              <li>
                <Link id="tab-4" to="/">
                  <ion-icon
                    name="logo-youtube"
                    className="whiteText"
                  ></ion-icon>
                </Link>
              </li>
            </ul>
          </div>
          <div className="sec quickLinks">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="service">Service</Link>
              </li>
              <li>
                <Link to="ourprojects">Our Team</Link>
              </li>
              <li>
                <Link to="contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="sec contact">
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span>
                  <ion-icon name="map-outline"></ion-icon>
                </span>
                <span>
                  {" "}
                  Kuadh, Jaynagar <br />
                  Madhubani, Bihar,
                  <br />
                  India
                </span>
              </li>
              <li>
                <span>
                  <ion-icon name="call-outline"></ion-icon>
                </span>
                <p>
                  <Link to="tel:8969910863">+918969910863</Link>
                </p>
              </li>
              <li>
                <span>
                  <ion-icon name="mail-outline"></ion-icon>
                </span>
                <p>
                  <Link to="mailto:mail@growthupconsultancy.com">
                    mail@growthupconsultancy.com
                  </Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyRight">
          <p>CopyRight &copy; GrowthUp</p>
          <p className="dev">
            Developed by{" "}
            <Link to="https://mdsaddam7860.github.io/Saddam.github.io/">
              Md Saddam
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
