import React from "react";
const Hero = () => {
  return (
    <>
      <div className="Hero-Container">
        <div className="content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="button-container">
            <button className="primary">Shop Now</button>
            <button className="secondary">Category</button>
          </div>
          <div className="more-info">
            <span>Also available on</span>
            <div className="imagecontiner">
              <img src="/images/flipkart.png" alt="flipkartlogo" />
              <img src="/images/amazon.png" alt="amazonlogo" />
            </div>
          </div>
        </div>
        <div className="img">
          <img src="/images/shoe_image.png" alt="shoe" />
        </div>
      </div>
    </>
  );
};

export default Hero;
