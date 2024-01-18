import React from 'react'
import PropTypes from 'prop-types';


export default function Ourservice(props) {
  return (
    <>
        
<section className="ourService">
 {/* <div className="rowService">
    <h2 className="section-heading">Our Services</h2>
  </div> */}


  <div className="rowService">


    <div className="column">
        <div className="card">
          <div className="icon-wrapper">
            <i className="fa-solid fa-building"></i>
          </div>
          <h3>{props.heading1}</h3>
          {/* <h3>Company Registration</h3> */}
          <p>
            {props.text1}
          </p>
          {/* <p>
            Assist startups in registering their business entities, such as private limited companies, limited liability partnerships 
             (LLPs), or sole proprietorships, depending on their needs and goals.
          </p> */}
        </div>
      </div>


      <div className="column">
        <div className="card">
          <div className="icon-wrapper">
            <i className="fa-solid fa-code"></i>
          </div>
          <h3>{props.heading2}</h3>
          {/* <h3>Website And App Development</h3> */}
          <p>
          {props.text2}
          </p>
          {/* <p>
            Expert website and app development services: Custom design, responsive coding, and seamless functionality for an 
             exceptional digital presence
          </p> */}
        </div>
      </div>



      <div className="column">
        <div className="card">
          <div className="icon-wrapper">
            <i className="fa-solid fa-share-from-square"></i>
          </div>
          <h3>{props.heading3}</h3>
          {/* <h3>Social Media Management</h3> */}
          <p>
          {props.text3}
          </p>
          {/* <p>
            Comprehensive social media management services: content creation, posting, engagement, analytics, and strategy for 
             effective online brand presence and growth.
          </p> */}
        </div>
      </div>
  </div>
</section>








    {/* <!-- services End here--> */}
    </>
  )
}
