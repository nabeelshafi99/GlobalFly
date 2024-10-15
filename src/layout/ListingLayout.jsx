import { Col, Row, Slider, Switch } from "antd";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "./listingLayout.scss";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const ListingLayout = () => {
  const [disabled, setDisabled] = useState(false);
  const onChange = (checked) => {
    setDisabled(checked);
  };

  return (
    <>
      <Header />

      <div className="listing-main-container ">
        <Row gutter={[20, "20px"]} className="w-full">
          <Col xs={24} md={24} className="bg-white p-5">
            <Row className="w-full" gutter={[20, 20]}>
              <Col xs={24} md={6}>
                <div className="form-field">
                  <span>From - To</span>
                  <select
                    style={{ border: "none", outline: "none" }}
                    onChange={(e) => console.log("working")}
                    name=""
                    id=""
                    className="w-full"
                  >
                    <option value="lahore-karachi">Lahore - Karachi</option>
                    <option value="karachi-sudia">
                      Karachi - Sudia Arabia
                    </option>
                    <option value="turkey-karachi">Turkey - Karachi</option>
                    <option value="dubai-islamabad">Dubai - Islamabad</option>
                  </select>
                </div>
              </Col>
              <Col xs={24} md={5}>
                <div className="form-field">
                  <span>Trip</span>
                  <select
                    style={{ border: "none", outline: "none" }}
                    onChange={(e) => console.log("working")}
                    name=""
                    id=""
                    className="w-full"
                  >
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
              <Col xs={24} md={6}>
                <div className="form-field">
                  <span>Pessenger - Class</span>
                  <select
                    style={{ border: "none", outline: "none" }}
                    onChange={(e) => console.log("working")}
                    name=""
                    id=""
                    className="w-full"
                  >
                    <option value="onepessengereconomy">
                      1 Pessenger, Economy
                    </option>
                    <option value="onepessengereconomy">
                      1 Pessenger, Economy
                    </option>
                    <option value="onepessengereconomy">
                      1 Pessenger, Economy
                    </option>
                    <option value="onepessengereconomy">
                      1 Pessenger, Economy
                    </option>
                  </select>
                </div>
              </Col>
              <Col xs={24} md={1}>
                <button
                  style={{ background: "#8DD3BB" }}
                  className="h-full w-full border flex items-center justify-center p-3 md:p-0"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9781 13.3281L14.9659 13.3444L14.9803 13.3588L19.3903 17.7688C19.5856 17.9875 19.6898 18.2727 19.6816 18.5658C19.6734 18.8591 19.5532 19.1382 19.3457 19.3457C19.1382 19.5532 18.8591 19.6734 18.5658 19.6816C18.2727 19.6898 17.9875 19.5856 17.7688 19.3903L13.3588 14.9803L13.3444 14.9659L13.3281 14.9781C11.9186 16.0369 10.2029 16.6085 8.44003 16.6066C3.93701 16.6066 0.273438 12.943 0.273438 8.44C0.273438 3.93701 3.93701 0.273438 8.44 0.273438C12.943 0.273438 16.6066 3.93701 16.6066 8.44C16.6085 10.2029 16.0369 11.9186 14.9781 13.3281ZM2.56656 8.44V8.44003C2.56843 9.99718 3.18783 11.49 4.28891 12.5911C5.38998 13.6922 6.88282 14.3116 8.43997 14.3134H8.44C9.60166 14.3134 10.7372 13.969 11.7031 13.3236C12.669 12.6782 13.4218 11.7609 13.8664 10.6877C14.3109 9.61444 14.4272 8.43349 14.2006 7.29415C13.974 6.15481 13.4146 5.10827 12.5931 4.28685C11.7717 3.46544 10.7252 2.90605 9.58585 2.67942C8.44652 2.45279 7.26556 2.56911 6.19233 3.01365C5.1191 3.4582 4.2018 4.21101 3.55642 5.17689C2.91103 6.14278 2.56656 7.27834 2.56656 8.44Z"
                      fill="#112211"
                      stroke="#112211"
                      strokeWidth="0.046875"
                    />
                  </svg>
                </button>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={8}>
            <div className="filter-main-container p-5">
              <h5 className="filter-container-heading mb-5">Filters</h5>

              <div className="mb-5">
                <div>
                  <h5 className="filter-container-subHeading">Price</h5>
                </div>
                <div>
                  <Slider range defaultValue={[0, 100]} disabled={disabled} />
                  <span className="flex justify-between">
                    <span>$ 98</span>
                    <span>$ 98</span>
                  </span>
                </div>
              </div>
              <div className="mb-5 filter-divider"></div>

              <div className="mb-5">
                <div>
                  <h5 className="filter-container-subHeading">
                    Departure Time
                  </h5>
                </div>
                <div>
                  <Slider range defaultValue={[0, 100]} disabled={disabled} />
                  <span className="flex justify-between">
                    <span>$ 98</span>
                    <span>$ 98</span>
                  </span>
                </div>
              </div>
              <div className="mb-5 filter-divider"></div>
              <div className="mb-5">
                <div>
                  <h5 className="filter-container-subHeading">
                    Rating
                  </h5>
                </div>
                <div>
                  <span className="flex gap-5 mt-3 font-semibold text-sm" >
                    <span className="border p-2">0+</span>
                    <span className="border p-2">1+</span>
                    <span className="border p-2">2+</span>
                    <span className="border p-2">3+</span>
                    <span className="border p-2">4+</span>
                  </span>
                </div>
              </div>
              <div className="mb-5 filter-divider"></div>
              <div className="mb-5">
                <div>
                  <h5 className="filter-container-subHeading">
                  Airlines
                  </h5>
                </div>
                <div>
                 <div className="flex gap-2 font-semibold my-2">
                  <input type="checkbox" />
                  <span>Emirated</span>
                 </div>
                 <div className="flex gap-2 font-semibold my-2">
                  <input type="checkbox" />
                  <span>Fly Dubai</span>
                 </div>
                 <div className="flex gap-2 font-semibold my-2">
                  <input type="checkbox" />
                  <span>Qatar</span>
                 </div>
                 <div className="flex gap-2 font-semibold my-2">
                  <input type="checkbox" />
                  <span>Etihad</span>
                 </div>
                 
                </div>
              </div>
              <div className="mb-5 filter-divider"></div>
              <div className="mb-5">
                <div>
                  <h5 className="filter-container-subHeading">
                  Trips
                  </h5>
                </div>
                <div>
                 
                 <div className="flex gap-2 font-semibold my-2">
                  <input type="checkbox" />
                  <span>Round trip</span>
                 </div>
                 <div className="flex gap-2 font-semibold my-2">
                  <input type="checkbox" />
                  <span>On Way</span>
                 </div>
                 <div className="flex gap-2 font-semibold my-2">
                  <input type="checkbox" />
                  <span>Multi-City</span>
                 </div>
                 <div className="flex gap-2 font-semibold my-2">
                  <input type="checkbox" />
                  <span>My Dates Are Flexible</span>
                 </div>
                 
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} md={16}>
            <Outlet />
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  );
};

export default ListingLayout;
