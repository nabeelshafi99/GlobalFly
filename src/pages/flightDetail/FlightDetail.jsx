import { useNavigate, useParams } from "react-router-dom";
import "./fligthDetail.scss";
import flightData from "../../data/FlightData";
import { Col, Row } from "antd";
import ListingCard from "../../components/listingCard/ListingCard";

const FlightDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = flightData[id - 1];

  const BookNow = (id) => {
    navigate(`/flow/checkout/${id}`);
  }

  const handleClick = (id) => {
    navigate(`/flow/flight/${id}`);
  };

  return (
    <div className="main-box">
      <div className="flex justify-between">
        <div>
          <div className="text-sm md:text-xl font-bold">{data.airline}</div>
          <div>
            <div className="flex  gap-3 items-center my-2">
              <span>
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 0C2.24312 0 0 2.14531 0 4.78125C0 6.03656 0.572187 7.70594 1.70062 9.74312C2.60687 11.3787 3.65531 12.8578 4.20062 13.5938C4.29277 13.7195 4.41325 13.8218 4.5523 13.8923C4.69134 13.9627 4.84504 13.9995 5.00094 13.9995C5.15683 13.9995 5.31053 13.9627 5.44958 13.8923C5.58862 13.8218 5.70911 13.7195 5.80125 13.5938C6.34563 12.8578 7.395 11.3787 8.30125 9.74312C9.42781 7.70656 10 6.03719 10 4.78125C10 2.14531 7.75688 0 5 0ZM5 7C4.60444 7 4.21776 6.8827 3.88886 6.66294C3.55996 6.44318 3.30362 6.13082 3.15224 5.76537C3.00087 5.39991 2.96126 4.99778 3.03843 4.60982C3.1156 4.22186 3.30608 3.86549 3.58579 3.58579C3.86549 3.30608 4.22186 3.1156 4.60982 3.03843C4.99778 2.96126 5.39991 3.00087 5.76537 3.15224C6.13082 3.30362 6.44318 3.55996 6.66294 3.88886C6.8827 4.21776 7 4.60444 7 5C6.99942 5.53026 6.78852 6.03863 6.41357 6.41357C6.03863 6.78852 5.53026 6.99942 5 7Z"
                    fill="#112211"
                  />
                </svg>
              </span>
              <span className="text-xs md:text-sm">{data.location}</span>
            </div>
          </div>
          <div className="flex flex-1 items-center gap-2">
            <span className="border py-1 px-3">{data.rating}</span>
            <span className="flex md:gap-3 items-center flex-col md:flex-row ">
              <span className="listing-rating-text">Very Good</span>
              <span className="listing-rating-review">
                {data.reviews} reviews
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end">
          <div className="text-xl md:text-2xl font-bold mb-2">
            $ {data.price}
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <span className="flex gap-1">
              <button className="border py-2 px-4">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7863 1.125C10.2504 1.125 9.0004 3.625 9.0004 3.625C9.0004 3.625 7.7504 1.125 5.21446 1.125C3.15352 1.125 1.52149 2.84922 1.5004 4.90664C1.45743 9.17734 4.88829 12.2145 8.64884 14.7668C8.75251 14.8373 8.87501 14.8751 9.0004 14.8751C9.12579 14.8751 9.24829 14.8373 9.35196 14.7668C13.1121 12.2145 16.543 9.17734 16.5004 4.90664C16.4793 2.84922 14.8473 1.125 12.7863 1.125V1.125Z"
                    stroke="#112211"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="border py-2 px-4">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1866 12.915L11.2024 12.9239L11.215 12.9107C11.4455 12.6697 11.7225 12.4778 12.0292 12.3468C12.336 12.2158 12.6661 12.1483 12.9996 12.1484C13.5168 12.1484 14.0211 12.3103 14.4417 12.6114C14.8622 12.9126 15.1779 13.3378 15.3445 13.8275C15.511 14.3172 15.5201 14.8468 15.3704 15.3419C15.2206 15.837 14.9197 16.2728 14.5097 16.5881C14.0997 16.9034 13.6012 17.0825 13.0843 17.1001C12.5673 17.1178 12.0578 16.9731 11.6273 16.6865C11.1968 16.3998 10.8668 15.9855 10.6837 15.5018C10.5005 15.0181 10.4735 14.4891 10.6062 13.9892L10.6109 13.9717L10.5951 13.9628L4.81383 10.71L4.798 10.7011L4.78543 10.7142C4.44333 11.0709 4.00234 11.3171 3.51918 11.4211C3.03602 11.5251 2.5328 11.4822 2.07425 11.2978C1.6157 11.1135 1.22279 10.7961 0.946072 10.3866C0.669354 9.97714 0.521484 9.49422 0.521484 9C0.521484 8.50578 0.669354 8.02286 0.946072 7.61336C1.22279 7.20387 1.6157 6.88654 2.07425 6.70218C2.5328 6.51783 3.03603 6.47489 3.51918 6.57889C4.00234 6.68289 4.44333 6.92907 4.78543 7.28575L4.798 7.29887L4.81383 7.28996L10.5951 4.03722L10.6109 4.02832L10.6062 4.01076C10.4516 3.4303 10.5139 2.81338 10.7815 2.27558C11.0491 1.73777 11.5036 1.31598 12.0599 1.08922C12.6161 0.862465 13.236 0.846301 13.8033 1.04376C14.3706 1.24122 14.8465 1.63875 15.1418 2.16188C15.437 2.68501 15.5314 3.29784 15.4073 3.88557C15.2831 4.4733 14.9489 4.9956 14.4673 5.35462C13.9857 5.71364 13.3897 5.88475 12.791 5.83589C12.1923 5.78703 11.6319 5.52155 11.2149 5.0892L11.2023 5.07616L11.1866 5.08504L5.4053 8.33778L5.38947 8.34668L5.39415 8.36423C5.50508 8.78082 5.50508 9.21918 5.39415 9.63577L5.38947 9.65332L5.4053 9.66222L11.1866 12.915Z"
                    fill="black"
                    stroke="#112211"
                    strokeWidth="0.046875"
                  />
                </svg>
              </button>
            </span>
            <button
            onClick={() => BookNow(data.id)}
              style={{ height: "35px", background: "#8DD3BB" }}
              className="border px-4 text-xs"
            >
              Book now
            </button>
          </div>
        </div>
      </div>

      <div>
        <div style={{width:"100%", height:300 }} className="bg-white flex mt-4 justify-center p-5">
          <img src={data.image} className="h-full object-cover" alt="" />
        </div>
      </div>

      <div className="my-5">
        <Row>
          {flightData.map((v, i) => (
            <Col key={i} className="my-2 bg-white" md={24}>
              <ListingCard
                onClick={handleClick}
                airline={v.airline}
                id={v.id}
                image={v.image}
                departure_time={v.departure_time}
                arrival_time={v.arrival_time}
                duration={v.duration}
                route={v.route}
                price={`$ ${v.price}`}
                reviews={v.reviews}
                rating={v.rating}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default FlightDetail;
