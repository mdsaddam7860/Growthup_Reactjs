import React from 'react'

export default function TeamSection() {
  return (
    <>
    <section className="team">
  <div className="container">
  <div className="our-Client">
    <h2>Our Mentors</h2>
  </div>  
 
      <div className="row mgt50px">
          <div className="column">
              <div className="imgBox">
                {/* <img src={"../img/Mentor/Ankit Jha.jpeg" }alt=''/> */}
                <img src={require('../img/Mentor/Shailesh-Ranjan.jpg')} alt='' />
              </div>
              <div className="details">
                  {/* <h3>Shailesh Ranjan Singh <span> Director, Entellus Facility Management </span></h3> */}
                  <h3>Shailesh Ranjan Singh <br/><span> Director, Entellus Facility Management </span></h3>
                  {/* <!-- <ul>
                    <li><a id="tab-1" href="#"><ion-icon name="logo-facebook" className="whiteText"></ion-icon></a></li>
                    <li><a id="tab-2" href="#"><ion-icon name="logo-instagram" className="whiteText"></ion-icon></a></li>
                    <li><a id="tab-3" href="#"><ion-icon name="logo-twitter" className="whiteText"></ion-icon></a></li>
                    <li><a id="tab-4" href="#"><ion-icon name="logo-youtube" className="whiteText"></ion-icon></a></li>
                </ul> --> */}
              </div>
          </div>
          <div className="column">
              <div className="imgBox">
              <img src={require('../img/Mentor/Ankit Jha.jpeg')} alt='' />
              </div>
              <div className="details">
                  <h3>Ankit Jha <br/><span>Senior Delivery Manager, Proarch</span></h3>
                  {/* <!-- <ul>
                    <li><a id="tab-1" href="#"><ion-icon name="logo-facebook" className="whiteText"></ion-icon></a></li>
                    <li><a id="tab-2" href="#"><ion-icon name="logo-instagram" className="whiteText"></ion-icon></a></li>
                    <li><a id="tab-3" href="#"><ion-icon name="logo-twitter" className="whiteText"></ion-icon></a></li>
                    <li><a id="tab-4" href="#"><ion-icon name="logo-youtube" className="whiteText"></ion-icon></a></li>
                </ul> --> */}
              </div> 
          </div>
          <div className="column">
              <div className="imgBox">
              <img src={require('../img/Mentor/s.jpg')} alt='' />
              </div>
              <div className="details">
                  {/* <h3>Sudesh Ranjan Singh<span>Advocate</span></h3> */}
                  <h3>Sudesh Ranjan Singh<br/><span>Advocate & Political Analyst</span></h3>
                  {/* <!-- <ul>
                    <li><a id="tab-1" href="#"><ion-icon name="logo-facebook" className="whiteText"></ion-icon></a></li>
                    <li><a id="tab-2" href="#"><ion-icon name="logo-instagram" className="whiteText"></ion-icon></a></li>
                    <li><a id="tab-3" href="#"><ion-icon name="logo-twitter" className="whiteText"></ion-icon></a></li>
                    <li><a id="tab-4" href="#"><ion-icon name="logo-youtube" className="whiteText"></ion-icon></a></li>
                </ul> --> */}
              </div>
          </div>
          <div className="column">
              <div className="imgBox">
              <img src={require('../img/new/Amar.jpg')} alt='' />
              </div>
              <div className="details">
                  <h3>Amar Kumar<br/><span>T.P.O at college affiliated with BEU.</span></h3>
                  {/* <!-- <ul>
                    <li><a id="tab-1" href="#"><ion-icon name="logo-facebook" className="whiteText"></ion-icon></a></li>
                    <li><a id="tab-2" href="#"><ion-icon name="logo-instagram" className="whiteText"></ion-icon></a></li>
                    <li><a id="tab-3" href="#"><ion-icon name="logo-twitter" className="whiteText"></ion-icon></a></li>
                    <li><a id="tab-4" href="#"><ion-icon name="logo-youtube" className="whiteText"></ion-icon></a></li>
                </ul> --> */}
              </div>
          </div>
      </div> 
  </div> 
</section>
    </>
  )
}



