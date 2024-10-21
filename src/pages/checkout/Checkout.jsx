import { Col, Row } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import flightData from "../../data/FlightData";
import ListingCard from "../../components/listingCard/ListingCard";

const Checkout = () => {
    const navigate = useNavigate()
  const { id } = useParams();
  const data = flightData[id - 1];
  const handleClick = (id) => {
    navigate(`/flow/download/:${id}`)
      console.log("handle Click",id);
  }
  return (
    <>
      <div className="mt-5 container mx-auto">
        <Row gutter={[20,20]}>
          <Col md={16}>
          <ListingCard 
          btnTitle={"book Now"}
          onClick={() => handleClick(data.id)}
                airline={data.airline}
                id={data.id}
                image={data.image}
                departure_time={data.departure_time}
                arrival_time={data.arrival_time}
                duration={data.duration}
                route={data.route}
                price={`$ ${data.price}`}
                reviews={data.reviews}
                rating={data.rating} />
          </Col>
          <Col className=" bg-white" md={8}>
            <div className="p-5 w-full flex items-center gap-3">
              <div className="w-44 border">
                <img src={data.image} alt="" />
              </div>
              <div>
                <h5 className="text-sm font-bold opacity-40">Economy</h5>
                <h2 className="font-bold text-2xl my-3">{data.airline}</h2>
                <span className="flex gap-2 items-center">
                  <span className="border p-1">{data.rating}</span>
                  <span>Very Good</span>
                  <span>{data.reviews}</span>
                  <span>reviews</span>
                </span>
              </div>
            </div>
            <div className="text-sm font-bold opacity-40 ps-4 border-t border-b py-2">
              Your booking is protected by golobe
            </div>
            <div className="text-sm font-bold ps-4 border-b p-2">
              <h1 className="text-2xl">Price Details</h1>
              <div className="flex justify-between items-center">
                <h5 className="text-sm my-2">Base Fare </h5>
                <h5 className="text-sm my-2">${Math.round(data.price / 100 * 10)}</h5>
              </div>
              <div className="flex justify-between items-center">
                <h5 className="text-sm my-2">Base Fare </h5>
                <h5 className="text-sm my-2">${Math.round(data.price / 100 * 20)}</h5> 
              </div>
              <div className="flex justify-between items-center">
                <h5 className="text-sm my-2">Base Fare </h5>
                <h5 className="text-sm my-2">${Math.round(data.price / 100 * 50)}</h5>
              </div>
              <div className="flex justify-between items-center">
                <h5 className="text-sm my-2">Base Fare </h5>
                <h5 className="text-sm my-2">${Math.round(data.price / 100 * 60)}</h5>
              </div>
              <div className="flex justify-between border-t items-center">
                <h5 className="text-sm my-2">Total </h5>
                <h5 className="text-sm my-2">${Math.round((data.price / 100 * 10) + (data.price / 100 * 20) + (data.price / 100 * 50) + (data.price / 100 * 60) )}</h5>
                
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Checkout;
