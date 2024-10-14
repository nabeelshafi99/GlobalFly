import { useState } from "react";
import "./hotelFlow.scss";
import HotelFlowBannerImg from "../../assets/images/HotelFlowBannerImg.jpg";
import { Button, Col, Row } from "antd";
import Card from "../../components/card/Card";
import GlobalCardImg from "../../assets/images/card.jpg";
import Sec3Gallery1 from "../../assets/images/sec-3-gallery-1.jpg";
import Sec3Gallery2 from "../../assets/images/sec-3-gallery-2.jpg";
import Sec3Gallery3 from "../../assets/images/sec-3-gallery-3.jpg";
import Sec3Gallery4 from "../../assets/images/sec-3-gallery-4.jpg";
import SmallCardImg from "../../assets/images/sm-card-img.jpg";

const HotelFLow = () => {
  const [destination, setDestination] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setDestination(event.target.value);
  };

  const countryOptions = [
    { key: "kh-su", value: "kh-su", text: "Karachi - Sudia Arabia" },
    { key: "kh-is", value: "ks-is", text: "Karachi - Islamabad" },
    { key: "kh-lh", value: "kh-lh", text: "Karachi - Lahore" },
    { key: "kh-pes", value: "kh-pes", text: "Karachi - Peshawar" },
    { key: "kh-dub", value: "kh-dub", text: "Karachi - Dubai" },
    { key: "kh-tur", value: "kh-tur", text: "Karachi - Turkey" },
  ];

  return (
    <div>
      {/* Hero Banner  */}
      <div className="hotel-flow-banner">
        <img src={HotelFlowBannerImg} alt="" />

        <div className="hotel-flow-content">
          <h1>
            Make your travel <br /> whishlist, we’ll do <br /> the rest
          </h1>
          <p>Special offers to suit your plan</p>
        </div>
      </div>

      {/* Section 1 */}
      <div className="hotel-sec-1 mb-20">
        <div className="hotel-sec-1-content">
          <div className="hotel-sec-1-top">
            <span>Where are you flying?</span>
          </div>
          <div className="hotel-sec-1-center ">
          <Row className="w-full" gutter={[20, 20]}>
            <Col xs={24} md={6}>
              <div className="form-field">
                <span>From - To</span>
                <select style={{border:"none",outline:"none"}} onChange={(e) => console.log("working")} name="" id="" className='w-full'>
                  <option value="lahore-karachi">Lahore - Karachi</option>
                  <option value="karachi-sudia">Karachi - Sudia Arabia</option>
                  <option value="turkey-karachi">Turkey - Karachi</option>
                  <option value="dubai-islamabad">Dubai - Islamabad</option>
                </select>
              </div>
            </Col>
            <Col  xs={24} md={6}>
              <div className="form-field">
                <span>Trip</span>
                <select style={{border:"none",outline:"none"}} onChange={(e) => console.log("working")} name="" id="" className='w-full'>
                  <option value="return">Return</option>
                  <option value="oneway">One Way</option>
                  <option value="Roundtrip">Round Trip</option>
                  <option value="multicity">Multicity</option>
                </select>
              </div>
            </Col>
            <Col xs={24} md={6}>
              <div className="form-field">
                <span>Depart- Return</span>
                <input
                  type="date"
                  // onChange={(e) => setDateExpire(e.target.value)}
                  // value={dateExpire}
                  placeholder="02/27"
                />
              </div>
            </Col>
            <Col  xs={24} md={6}>
              <div className="form-field">
                <span>Pessenger - Class</span>
                <select style={{border:"none",outline:"none"}} onChange={(e) => console.log("working")} name="" id="" className='w-full'>
                  <option value="onepessengereconomy">1 Pessenger, Economy</option>
                  <option value="onepessengereconomy">1 Pessenger, Economy</option>
                  <option value="onepessengereconomy">1 Pessenger, Economy</option>
                  <option value="onepessengereconomy">1 Pessenger, Economy</option>
                </select>
              </div>
            </Col>
          </Row>
          </div>

          <div className="hotel-sec-1-end">
            <button className="hotel-sec-1-btn btn-v2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.46858 14.9999H9.49983C9.65427 15.0008 9.80542 14.9552 9.9336 14.8691C10.0618 14.7829 10.1611 14.6602 10.2186 14.5168L10.1967 14.5085L10.1967 14.5083C10.141 14.6472 10.0447 14.7661 9.92052 14.8496C9.79624 14.9331 9.64971 14.9774 9.49996 14.9765H9.49983H9.4691M9.46858 14.9999L9.46963 14.9765C9.46945 14.9765 9.46928 14.9765 9.4691 14.9765M9.46858 14.9999V14.9765H9.4691M9.46858 14.9999L9.4691 14.9765M9.4691 14.9765C9.17379 14.963 8.92874 14.7657 8.83168 14.4845L8.83151 14.484C8.82949 14.4786 8.82777 14.4734 8.82603 14.4676L8.82617 14.4675L8.82513 14.4651L6.99283 10.1732C6.96895 10.0938 6.9662 10.0095 6.98487 9.92868C7.00363 9.84747 7.04336 9.7726 7.1001 9.71155L9.4691 14.9765ZM14.7645 1.23679C14.8636 1.33626 14.9317 1.46231 14.9607 1.59968C14.9896 1.73706 14.9781 1.87988 14.9276 2.01088L14.9276 2.01102L10.1968 14.5081L7.10012 9.71152L13.5164 2.82901C13.5165 2.82891 13.5166 2.82882 13.5167 2.82872C13.5393 2.80608 13.5572 2.77924 13.5694 2.74972C13.5817 2.72007 13.588 2.68829 13.588 2.65619C13.588 2.62409 13.5817 2.59231 13.5694 2.56266C13.5571 2.533 13.5391 2.50606 13.5164 2.48337C13.4937 2.46067 13.4668 2.44267 13.4371 2.43038C13.4075 2.4181 13.3757 2.41178 13.3436 2.41178C13.3115 2.41178 13.2797 2.4181 13.25 2.43038C13.2205 2.44261 13.1937 2.46051 13.1711 2.48307C13.171 2.48317 13.1709 2.48327 13.1708 2.48337L6.28512 8.89933C6.22406 8.95608 6.14918 8.99582 6.06797 9.01458C5.98716 9.03325 5.90288 9.03051 5.82347 9.00663L1.53403 7.17495L1.53408 7.17485L1.53191 7.17416L1.51945 7.17021C1.51939 7.17019 1.51933 7.17017 1.51927 7.17015C1.37747 7.12266 1.25378 7.03258 1.16507 6.91219C1.07633 6.79175 1.02693 6.64685 1.02362 6.49728C1.0203 6.34771 1.06324 6.20077 1.14657 6.07652C1.22872 5.95403 1.34617 5.85948 1.48327 5.80537V5.80625L1.49156 5.80311L13.9925 1.07155L13.9925 1.07153C14.1235 1.02174 14.266 1.01086 14.4029 1.04018C14.5399 1.0695 14.6654 1.13778 14.7645 1.23679ZM14.7645 1.23679C14.7645 1.2368 14.7645 1.23681 14.7645 1.23683L14.7811 1.22025L14.7645 1.23679Z"
                  fill="black"
                  stroke="#112211"
                  strokeWidth="0.046875"
                />
              </svg>
              Show Places
            </button>
          </div>
        </div>
      </div>

      {/* hotels recent search  section   */}
      <div className="mb-10">
        <div className="section">
          <div className="section-content">
            <div className="section-title">
              <div className="section-title-left">
                <h2>Your recent searches</h2>
              </div>
              <div className="section-title-right ">
                <button className="border">See All</button>
              </div>
            </div>
            <div className="hotel-recent-search-sec-content">

              <Row className="w-full" gutter={["24px", "24px"]}>
                <Col sm={24} md={6}>
              <div className="hotel-small-card">
                <div className="hotel-small-card-img">
                  <img src={SmallCardImg} alt="" />
                </div>
                <div className="hotel-small-card-centent">
                  <h4>Istanbul, Turkey</h4>
                  <h5>325 places</h5>
                </div>
              </div>
                </Col>
                <Col sm={24} md={6}>
              <div className="hotel-small-card">
                <div className="hotel-small-card-img">
                  <img src={SmallCardImg} alt="" />
                </div>
                <div className="hotel-small-card-centent">
                  <h4>Istanbul, Turkey</h4>
                  <h5>325 places</h5>
                </div>
              </div>
                </Col>
                <Col sm={24} md={6}>
              <div className="hotel-small-card">
                <div className="hotel-small-card-img">
                  <img src={SmallCardImg} alt="" />
                </div>
                <div className="hotel-small-card-centent">
                  <h4>Istanbul, Turkey</h4>
                  <h5>325 places</h5>
                </div>
              </div>
                </Col>
                <Col sm={24} md={6}>
              <div className="hotel-small-card">
                <div className="hotel-small-card-img">
                  <img src={SmallCardImg} alt="" />
                </div>
                <div className="hotel-small-card-centent">
                  <h4>Istanbul, Turkey</h4>
                  <h5>325 places</h5>
                </div>
              </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2*/}

      <div className="section mb-10">
        <div className="section-content">
          <div className="section-title">
            <div className="section-title-left">
              <h2>Fall into travel</h2>
              <h5>
                Going somewhere to celebrate this season? Whether you’re going
                home or somewhere to roam, we’ve got <br />
                the travel tools to get you to your destination.
              </h5>
            </div>
            <div className="section-title-right">
              <button className="border">See more places</button>
            </div>
          </div>

          <div>
            <Row gutter={["32px", "32px"]}>
              <Col xs={24} md={12} lg={6} className="flex justify-center">
                <Card
                  thumbnail={GlobalCardImg}
                  title="Melbourne"
                  des="An amazing journey"
                  price={700}
                  btnTitle="Book Flight"
                />
              </Col>
              <Col xs={24} md={12} lg={6} className="flex justify-center">
                <Card
                  thumbnail={GlobalCardImg}
                  title="Paris"
                  des="A Paris Adventure"
                  price={600}
                  btnTitle="Book Flight"
                />
              </Col>
              <Col xs={24} md={12} lg={6} className="flex justify-center">
                <Card
                  thumbnail={GlobalCardImg}
                  title="Paris"
                  des="A Paris Adventure"
                  price={600}
                  btnTitle="Book Flight"
                />
              </Col>
              <Col xs={24} md={12} lg={6} className="flex justify-center">
                <Card
                  thumbnail={GlobalCardImg}
                  title="Paris"
                  des="A Paris Adventure"
                  price={600}
                  btnTitle="Book Flight"
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section mb-10">
        <div className="section-content">
          <div className="section-title">
            <div className="section-title-left">
              <h2>Fall into travel</h2>
              <h5>
                Going somewhere to celebrate this season? Whether you’re going
                home or somewhere to roam, we’ve got the travel tools to get you
                to your <br /> destination.
              </h5>
            </div>
            <div className="section-title-right">
              <button className="border">See All</button>
            </div>
          </div>

          <div>
            <Row>
              <Col
                xs={24}
                md={24}
                xl={10}
                className="flow-sec-3-card-left-main"
              >
                <div className="flow-sec-3-card-left-content">
                  <div className="flow-sec-3-left-card-text">
                    <div className="flow-sec-3-left-card-title">
                      <h1>
                        Backpacking <br /> Sri Lanka
                      </h1>
                      <div>
                        <p>From</p>
                        <h2>$ 700</h2>
                      </div>
                    </div>
                    <p>
                      Traveling is a unique experience as it's the best way to
                      unplug from the pushes and pulls of daily life. It helps
                      us to forget about our problems, frustrations, and fears
                      at home. During our journey, we experience life in
                      different ways. We explore new places, cultures, cuisines,
                      traditions, and ways of living.
                    </p>
                  </div>
                  <Button className="flow-sec-3-right-btn">Book Flight</Button>
                </div>
              </Col>
              <Col xs={24} md={24} xl={14} className="flow-sec-3-right-main">
                <div className="flow-sec-3-right-content">
                  <div>
                    <img src={Sec3Gallery1} alt="" />
                  </div>
                  <div>
                    <img src={Sec3Gallery2} alt="" />
                  </div>
                  <div>
                    <img src={Sec3Gallery3} alt="" />
                  </div>
                  <div>
                    <img src={Sec3Gallery4} alt="" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelFLow;
