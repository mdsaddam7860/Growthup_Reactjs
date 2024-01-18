import React from 'react'

export default function Carousel() {
  return (
    <>
        <section className="carouselSection">
  <div className="carousel_1">
    <i id="left" className="fa-solid fa-angle-left"></i>
    <ul className="carousel_2">


      <li className="card">
        <div className="img"><img src={require("../img/Team/Saddam.jpeg")} alt="img" draggable="false"/></div>
        <h2>Md Saddam</h2>
        <span>Full Stack Web-Developer</span>
      </li>


      <li className="card">
        <div className="img"><img src={require("../img/Team/Akanksha.jpeg")} alt="img" draggable="false"/></div>
        <h2>Akansha Priya</h2>
        <span>B.D.A.</span>
      </li>


      <li className="card">
        <div className="img"><img src={require("../img/Team/Nirnayak.jpg")} alt="img" draggable="false"/></div>
        <h2>Nirnayak Jha</h2>
        <span>Android Developer</span>
      </li>


      <li className="card">
        <div className="img"><img src={require("../img/Team/Kundan.jpg")} alt="img" draggable="false"/></div>
        <h2>Kundan Roy</h2>
        <span>UI-UX</span>
      </li>


      <li className="card">
        <div className="img"><img src={require("../img/Team/Amit.jpg")} alt="img" draggable="false"/></div>
        <h2>Amit Kumar</h2>
        <span>Back-end Developer</span>
      </li>
      <li className="card">
        <div className="img"><img src={require("../img/Team/Anshu.jpg")} alt="img" draggable="false"/></div>
        <h2>Anshu Raj</h2>
        <span>Editor</span>
      </li>
      <li className="card">
        <div className="img"><img src={require("../img/Team/Sahil.jpg")} alt="img" draggable="false"/></div>
        <h2>Sahil Kumar</h2>
        <span>Content Writer</span>
      </li>
      <li className="card">
        <div className="img"><img src={require("../img/Team/Akanksha.jpeg")}alt="img" draggable="false"/></div>
        <h2>Akanksha Priya</h2>
        <span>Marketing Executive</span>
      </li>
      <li className="card">
        <div className="img"><img src={require("../img/Team/Trisha Raj.jpg")} alt="img" draggable="false"/></div>
        <h2>Trisha Raj</h2>
        <span>Sales Executive</span>
      </li>
      <li className="card">
        <div className="img"><img src={require
        
        ("../img/Team/Dev.jpg")} alt="img" draggable="false"/></div>
        <h2>Dev Kumar</h2>
        <span>Social Media Handler</span>
      </li>
      
    </ul>
    <i id="right" className="fa-solid fa-angle-right"></i>
  </div>

</section>
    </>
  )
}
