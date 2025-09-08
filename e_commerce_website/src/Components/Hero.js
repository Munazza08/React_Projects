import React from 'react'
import Collections from './Collections';
import pic1 from "./images/banner1.png";
import pic2 from "./images/banner2.jpg";
import pic3 from "./images/banner3.png";


const Hero = () => {
  <Collections/>
  return (
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex align-items-center justify-content-around" style={{ gap: '20px' }}>
                <img src={pic1} className="d-block" alt="..." style={{ height: '550px', width: '900px', marginBottom: '30px' }}/>
                <div className="banner-box1">
                  <p>NEW ARRIVALS ONLY</p>
                  <h3>power up <br/>
                  your life with<br/>
                  the latest tech!</h3>
                  <a href="">Latest Collection</a>
                </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={pic2} className="d-block" alt="..." style={{ height: '590px', width: '1400px' }}/>
          </div>
          <div className="carousel-item">
            <div className="d-flex align-items-center justify-content-around" style={{ gap: '20px' }}>
                <div className="banner-box2">
                  <h3>The Latest. The Greatest.<br/>
                  In Your Cart!</h3>
                  <p>Experience the Future of Convenience!</p>
                  <a href="">Check Now</a>
                </div>
                <img src={pic3} className="d-block" alt="..." style={{ height: '630px', width: '500px', position:'relative', top:'-70px'}}/>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Hero
