import { Col, Row } from "antd";
import ListingCardImg from "../../assets/images/listing-card.png";
import "./listingCard.scss";

const ListingCard = ({
  airline,
  image,
  departure_time,
  arrival_time,
  duration,
  route,
  price,
  reviews,
  rating,
}) => {
  return (
    <div className="flex gap-2 justify-center p-5 bg-white">
      <Row gutter={[20, 20]} className="w-full">
        <Col xs={24} md={6}>
          <div>
            <img className="w-full" src={image} alt="" />
          </div>
        </Col>
        <Col xs={24} md={18} className="flex flex-col gap-2">
          <div className="listing-card-content">
            <span className="listing-content-top-left">
              <span className="listing-rating">{rating}</span>
              <span className="flex gap-3">
                <span className="listing-rating-text">Very Good</span>
                <span className="listing-rating-review">{reviews} Reviews</span>
              </span>
            </span>

            <span className="listing-card-top-row-right">
              <span className="listing-card-top-row-right-title">
                starting from
              </span>
              <span className="listing-card-top-row-right-text">{price}</span>
            </span>
          </div>

          <div className="flex flex-col gap-4 mb-4">
            <div className="listing-card-center-content">
              <div>
                <input type="checkbox" />
              </div>

              <div className="listing-card-center-right-content">
                <div className="listing-card-center-content-left">
                  <div>
                    <div className="listing-content-card-title">{departure_time}</div>
                    <div className="listing-content-card-subtitle">
                      {airline}
                    </div>
                  </div>
                  <div className="listing-content-card-title">-</div>
                  <div className="listing-content-card-title">{arrival_time}</div>
                </div>
                <div className="listing-content-card-title">non stop</div>
                <div>
                  <div className="listing-content-card-title">{duration}</div>
                  <div className="listing-content-card-subtitle">{route}</div>
                </div>
              </div>
            </div>
            <div className="listing-card-center-content">
              <div>
                <input type="checkbox" />
              </div>

              <div className="listing-card-center-right-content">
                <div className="listing-card-center-content-left">
                  <div>
                    <div className="listing-content-card-title">{departure_time}</div>
                    <div className="listing-content-card-subtitle">
                      {airline}
                    </div>
                  </div>
                  <div className="listing-content-card-title">-</div>
                  <div className="listing-content-card-title">{arrival_time}</div>
                </div>
                <div className="listing-content-card-title">non stop</div>
                <div>
                  <div className="listing-content-card-title">{duration}</div>
                  <div className="listing-content-card-subtitle">{route}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5 filter-divider"></div>

          <div className="flex gap-2">
            <button className="border px-3" style={{ height: "48px" }}>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7863 1.625C10.2504 1.625 9.0004 4.125 9.0004 4.125C9.0004 4.125 7.7504 1.625 5.21446 1.625C3.15352 1.625 1.52149 3.34922 1.5004 5.40664C1.45743 9.67734 4.88829 12.7145 8.64884 15.2668C8.75251 15.3373 8.87501 15.3751 9.0004 15.3751C9.12579 15.3751 9.24829 15.3373 9.35196 15.2668C13.1121 12.7145 16.543 9.67734 16.5004 5.40664C16.4793 3.34922 14.8473 1.625 12.7863 1.625V1.625Z"
                  stroke="#4C4850"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="w-full border-0"
              style={{ height: "48px", backgroundColor: "#8DD3BB" }}
            >
              View Deals
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ListingCard;
