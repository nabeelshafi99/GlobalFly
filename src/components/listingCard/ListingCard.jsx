import { Col, Row } from "antd";
import "./listingCard.scss";

const ListingCard = () => {
  return (
    <div className="flex gap-2 ">
      <Row className="w-full">
        <Col xs={24} md={6} className="bg-gray-700">
          <div>img</div>
        </Col>
        <Col xs={24} md={18} className=" px-4">
          <div className="flex justify-between">
            <span>
              <span className="border p-2 me-2">4.2</span> 
            <span className="text-sm">
              Very Good 54 reviews
            </span>
            </span>
            <span className="flex flex-col items-end">
                <span>starting from</span>
                <span className="text-2xl font-semibold">$ 104</span>
            </span>
          </div>
          <div>dsada</div>
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
