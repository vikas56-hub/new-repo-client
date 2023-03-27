import React from "react";
import "../components.style.scss";
import Companycard from "./Companycard";
import img1 from "./CompanyAssets/1.png";
import img2 from "./CompanyAssets/2.png";
import img3 from "./CompanyAssets/3.png";
import img4 from "./CompanyAssets/4.png";
import img5 from "./CompanyAssets/5.png";
import img6 from "./CompanyAssets/6.png";
import img7 from "./CompanyAssets/7.png";
import img8 from "./CompanyAssets/8.png";
import img9 from "./CompanyAssets/9.png";
function CompanySection() {
  return (
    <div className="Main-company-feature">
      <div className="CompanySection container ">
        <div className="CompanySection-main container flex">
          <div className="CompanySection-mainText">
            <span>Our </span>
            Trusted Partner & our proud
            <br />
            investor around the globe
          </div>
          <div className="CompanySection-img">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            {/*<img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" /> */}
          </div>
        </div>
      </div>
      <div className="FeaturesSection container">
        <div className="cards ">
          {Companycard.map((prop) => {
            return (
              <div className="card flex">
                <div className="card-img">
                  <img src={prop.img} alt="" />
                </div>
                <div className="card-info">
                  <h3>{prop.heading}</h3>
                  <p>{prop.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CompanySection;
