import React from "react";

export default function Slider() {
  return (
    <>
    <div className="container">
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img className="d-block w-100" src={require("../img/Header/145-1300x650.jpg")} alt="First slide"/>
            <div className="carousel-caption d-none d-md-block">
                <h5>My Caption Title (1st Image)</h5>
                <p>The whole caption will only show up if the screen is at least medium size.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src={require("../img/Header/145-1300x650.jpg")} alt="Second slide"/>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src={require("../img/Header/10938.jpg")} alt="Third slide"/>
        </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a>
</div>
</div>
    </>
  );
}
