import { Col, Row } from "antd";
import HotelListingCard from "../../components/HotelListingCard/HotelListingCard";
import SortBox from "../../components/sortBox/SortBox";

const hotels = [
  {
    hotel: "CVK Park Bosphorus Hotel Istanbul",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/52208899.jpg?k=c95fd2bc2dc4b71d43340b07d8cada36a2e63c1b3de310d1a9610d348fe8b70e&o=&hp=1",
    location: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
    price: 600,
    rating: 4.2,
    reviews: 371,
    stars: 5,
    amenities: "20+ Amenities",
  },
  {
    hotel: "Eresin Hotels Sultanahmet - Boutique Class",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/6c/6c/ff/crown-exterior.jpg?w=700&h=-1&s=1",
    location: "Kucukayasofya No.40 Sultanahmet, Istanbul 34022",
    price: 104,
    rating: 4.2,
    reviews: 54,
    stars: 5,
    amenities: "20+ Amenities",
  },
  {
    hotel: "Eresin Hotels Sultanahmet - Boutique Class",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/6c/6c/ff/crown-exterior.jpg?w=700&h=-1&s=1",
    location: "Kucukayasofya No.40 Sultanahmet, Istanbul 34022",
    price: 200,
    rating: 4.2,
    reviews: 54,
    stars: 5,
    amenities: "20+ Amenities",
  },
  {
    hotel: "Eresin Hotels Sultanahmet - Boutique Class",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/6c/6c/ff/crown-exterior.jpg?w=700&h=-1&s=1",
    location: "Kucukayasofya No.40 Sultanahmet, Istanbul 34022",
    price: 400,
    rating: 4.2,
    reviews: 54,
    stars: 5,
    amenities: "20+ Amenities",
  },
];

const HotelListing = () => {
  return (
    <>
      <SortBox />
      <div className="my-5 bg-">
        <Row gutter={[20, 20]}>
          {hotels.map((v, i) => (
            <Col xs={24}>
              <HotelListingCard
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
