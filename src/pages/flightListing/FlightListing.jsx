import { Col, Row } from "antd";
import ListingCard from "../../components/listingCard/ListingCard";
import SortBox from "../../components/sortBox/SortBox";
import { useNavigate} from "react-router-dom";
import flightData from "../../data/FlightData"



const FlightListing = () => {
  const navigate = useNavigate();


  const handleClick = (id) => {
    console.log("handle Click",id)
    navigate(`/flow/flight/${id}`)
  }
  
  

  return (
    <>
      <SortBox />
      <div className="my-5 bg-">
        <Row gutter={[20, 20]}>
          {flightData.map((v, i) => (
            <Col key={i} xs={24}>
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
    </>
  );
};

export default FlightListing;
