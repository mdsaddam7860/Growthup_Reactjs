import React from "react";
import {Link} from 'react-router-dom';


export default function ContactUs() {
  return (
    <>
      





      <section className="section contact-col margin-contact" id="contact-col" aria-label="contact">
        <div className="container-con">

          <h2 className="h2 section-title">Let's Contact With Us</h2>

          <p className="section-text">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna
            aliqua. */}
          </p>

          <form action="" className="contact-form">

            <div className="input-wrapper">
              <input type="text" name="name" aria-label="name" placeholder="Your name*" required className="input-field"/>

              <input type="email" name="email_address" aria-label="email" placeholder="Email address*" required
                className="input-field"/>
            </div>

            <div className="input-wrapper">
              <input type="text" name="subject" aria-label="subject" placeholder="Subject" className="input-field"/>

              <input type="number" name="phone" aria-label="phone" placeholder="Phone number" className="input-field"/>
            </div>

            <textarea name="message" aria-label="message" placeholder="Your message...*" required
              className="input-field"></textarea>

            <div className="checkbox-wrapper">
              <input type="checkbox" name="terms_and_policy" id="terms" required className="checkbox"/>

              <label htmlFor="terms" className="label">
                Accept <Link to="/" className="label-link">Terms of Services</Link> and <a href="/" className="label-link">Privacy
                  Policy</a>
              </label>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>

          </form>

          <ul className="contact-list">
        <li className="contact-item">
          <div className="contact-card">
            <div className="card-icon">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
            </div>

            <div className="card-content">
              <h3 className="h3 card-title">Mail Here</h3>

              <Link to="mailto:growthupconsultancy@gmail.com" className="card-link">
              growthupconsultancy@gmail.com
              </Link>
              <Link to="mailto:artistaryanchauhan@gmail.com" className="card-link">
              artistaryanchauhan@gmail.com
              </Link>
            </div>
          </div>
        </li>

        <li className="contact-item">
          <div className="contact-card">
            <div className="card-icon">
              <ion-icon name="map-outline" aria-hidden="true"></ion-icon>
            </div>

            <div className="card-content">
              <h3 className="h3 card-title">Visit Here</h3>

              <address className="card-address">
                Kuadh, Jayanagar 
                <br />
                Madhubani , Bihar (847226)
              </address>
            </div>
          </div>
        </li>

        <li className="contact-item">
          <div className="contact-card">
            <div className="card-icon">
              <ion-icon name="headset-outline" aria-hidden="true"></ion-icon>
            </div>

            <div className="card-content">
              <h3 className="h3 card-title">Call Here</h3>

              <Link to="tel:+8969910863" className="card-link">
                +91 8969910863
              </Link>
              <Link to="tel:+7050690344" className="card-link">
                +91 7050690344
              </Link>
            </div>
          </div>
        </li>
      </ul>

        </div>
      </section>

















      
    </>
  );
}
