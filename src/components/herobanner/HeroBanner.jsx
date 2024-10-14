import "./herobanner.scss";
import HeroBannerImg from "../../assets/images/hero-banner.jpg";

const HeroBanner = () => {
  return(
         <div className="hero-banner">

        <img src={HeroBannerImg} alt="" />


        <div className="hero-content">
          <h3>Helping Other</h3>
          <h1>Live & Travel</h1>
          <p>Special offers to suit your plan</p>
        </div>
      </div>
    )
}

export default HeroBanner;