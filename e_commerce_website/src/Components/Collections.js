import React from 'react'
import img1 from "./images/tab1.png";
import img2 from "./images/lenovo.jpg";
import img3 from "./images/apple-mobile.png";
import img4 from "./images/mobile2.jpg";
import img5 from "./images/tab2.jpg";
import img6 from "./images/apple-laptop.png";

const Collections = () => {
  return (
    <div className='main-container'>
      <h1>NEW COLLECTIONS</h1>
      <div className='row1'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <div className='row2'>
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
      </div>
      <div className='button-box'><a href="">Explore More</a></div>
    </div>
  )
}

export default Collections
