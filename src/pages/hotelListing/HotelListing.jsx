import { Col, Row } from "antd";
import HotelListingCard from "../../components/HotelListingCard/HotelListingCard";
import SortBox from "../../components/sortBox/SortBox";
import HotelData from "../../data/HotelData";
import { useNavigate } from "react-router-dom";

const HotelListing = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/flow/hotel/${id}`)
    console.log("handle click",id);
  };
  return (
    <>
      <SortBox />
      <div className="my-5 bg-">
        <Row gutter={[20, 20]}>
          {HotelData.map((v, i) => (
            <Col key={i} xs={24}>
              <HotelListingCard
                onClick={handleClick}
                id={v.id}
                hotel={v.hotel}
                image={v.image}
                location={v.location}
                price={v.price}
                rating={v.rating}
                reviews={v.reviews}
                stars={v.stars}
                amenities={v.amenities}
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default HotelListing;
