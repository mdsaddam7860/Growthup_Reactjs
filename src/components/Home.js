import React from 'react'
// import Contact from './Contact';
import Elements from './Elements';
import ContactUs from './ContactUs';
import TeamSection from './TeamSection';






export default function Home() {
   






  return (
    <>
         {/* <!-- Image Slider Start Here --> */}

    
{/* <!-- slides --> */}
<section id="Home">    
<div className="slider">
<div className="slider__slides">
  <div className="slide s--active">
    <div className="slide__inner">
      <div className="slide__content">
        <h2 className="slide__heading">Your Success,  Our Mission</h2>
        <p className="slide__text">at GrowthUP.</p>
      </div>
    </div>
  </div>
  <div className="slide">
    <div className="slide__inner">
      <div className="slide__content">
        <h2 className="slide__heading">Success is a journey,</h2>
        <p className="slide__text">not a destination.</p>
      </div>
    </div>
  </div>
  <div className="slide">
    <div className="slide__inner">
      <div className="slide__content">
        <h2 className="slide__heading">Challenge accepted</h2>
        <p className="slide__text">results delivered.</p>
      </div>
    </div>
  </div>
  <div className="slide">
    <div className="slide__inner">
      <div className="slide__content">
        <h2 className="slide__heading">Your Success, Our Mission</h2>
        <p className="slide__text">at GrowthUP.</p>
      </div>
    </div>
  </div>
  <div className="slide s--prev">
    <div className="slide__inner">
      <div className="slide__content">
        <h2 className="slide__heading">GrowthUP</h2>
        <p className="slide__text">Your Journey to Success Starts Here</p>
      </div>
    </div>
  </div>
</div>
{/* <!-- slides end --> */}
{/* <div className="slider__control">
  <div className="slider__control-line"></div>
  <div className="slider__control-line"></div>
</div> */}
{/* <div className="slider__control slider__control--right m--right">
  <div className="slider__control-line"></div>
  <div className="slider__control-line"></div>
</div> */}
</div>



</section>

{/* Image Slider End Here  */}











<div className="container-service bg-diff">



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
          <h3>Company Registration</h3>
          {/* <h3>Company Registration</h3> */}
          <p>
          Assist startups in registering their business entities, such as private limited companies, limited liability partnerships 
             (LLPs), or sole proprietorships, depending on their needs and goals.
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
          <h3>Website And App Development</h3>
          {/* <h3>Website And App Development</h3> */}
          <p>
          Expert website and app development services: Custom design, responsive coding, and seamless functionality for an 
             exceptional digital presence
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
          <h3>Social Media Management</h3>
          {/* <h3>Social Media Management</h3> */}
          <p>
          Comprehensive social media management services: content creation, posting, engagement, analytics, and strategy for 
             effective online brand presence and growth.
          </p>
          {/* <p>
            Comprehensive social media management services: content creation, posting, engagement, analytics, and strategy for 
             effective online brand presence and growth.
          </p> */}
        </div>
      </div>
  </div>
</section>








</div>













{/* <div className="container-service bg-diff">

 <div className="rowService-text">
    <h2 className="section-heading-text">Our Services</h2>
  </div> 

    <Ourservice heading1 = "Company Registration"  text1 = "Assist startups in registering their business entities, such as private limited companies, limited liability partnerships (LLPs), or sole proprietorships, depending on their needs and goals." 
    heading2 = "Website And App Development"  text2 = "Expert website and app development services: Custom design, responsive coding, and seamless functionality for an exceptional digital presence"
    heading3 = "Social Media Management"  text3 = "Comprehensive social media management services: content creation, posting, engagement, analytics, and strategy for effective online brand presence and growth."
    />

</div> */}




    {/* <!-- services End here--> */}






    {/* <!----> */}

      <Elements/>

  {/* <!----> */}












  <div className="container-all bg-diff container-team">


  <TeamSection/>


</div>
















{/* <!-- Title Code --> */}
<section id="client">
  <div className="our-Client">
    <h2>Our Clients</h2>
  </div>  

{/* <!-- Slider Code --> */}
<div className="wrapper">
	<div className="slider_cLient">
		<div className="slide-track">
		
			{/* <!-- Img Code --> */}
			<div className="slide_img">
				<img src={require("../img/Our Clients/Baba.png")} alt='' />
			</div>
			<div className="slide_img">
            <img src={require("../img/new/Asank.png")} alt='' />

			</div>
			<div className="slide_img">
            <img src={require("../img/new/Entellus Facility.png")} alt='' />

			</div>
			<div className="slide_img">
            <img src={require("../img/new/Meant4Skill Development Foundation.png")} alt='' />
			</div>
			<div className="slide_img">
            <img src={require("../img/new/Tech twigs.png")} alt='' />
			</div>
			<div className="slide_img">
            <img src={require("../img/new/capetown.png")} alt='' />
			</div>
			<div className="slide_img">
            <img src={require("../img/Our Clients/Baba.png")} alt='' />
			</div>
      <div className="slide_img">
<img src={require("../img/new/Asank.png")} alt='' />
			</div>
			<div className="slide_img">
				<img src={require("../img//new/Entellus Facility.png")} alt='' />
			</div>
			<div className="slide_img">
				<img src={require("../img/new/Meant4Skill Development Foundation.png")} alt='' />
			</div>
			<div className="slide_img">
				<img src={require("../img/new/capetown.png")} alt='' />
			</div>
			<div className="slide_img">
<img src={require("../img/new/Tech twigs.png")} alt='' />
			</div>
			<div className="slide_img">
				<img src={require("../img/new/Asank.png")} alt='' />
			</div>
			<div className="slide_img">
<img src={require("../img/new/Meant4Skill Development Foundation.png")} alt='' />
			</div>
			<div className="slide_img">
            <img src={require("../img/new/Entellus Facility.png")} alt='' />
			</div>
			
			{/* <!-- Img Code End --> */}
			
		</div>
	</div>
</div>
</section>





{/* <!-- Client End Here --> */}



{/* <!-- Our Experts Section start Here --> */}



{/* Contact Start Here */}


<div className="bgd-diff">

<ContactUs/>
</div>




{/*  Contact End Here */}





    </>
  )
}
