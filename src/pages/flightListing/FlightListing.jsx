import { Col, Row } from "antd";
import ListingCard from "../../components/listingCard/ListingCard";
import SortBox from "../../components/sortBox/SortBox";

const flights = [
  {
    airline: "Emirates",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpCT6a8VqI-PgBbbU8E4UbnJxOHkpErgjSQ&s",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$104",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "FlyDubai",
    image: "https://logowik.com/content/uploads/images/flydubai7157.jpg",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$204",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "Qatar Airways",
    image:
      "https://download.logo.wine/logo/Qatar_Airways/Qatar_Airways-Logo.wine.png",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$604",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "Lufthansa",
    image: "https://download.logo.wine/logo/Lufthansa/Lufthansa-Logo.wine.png",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$124",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "British Airways",
    image:
      "https://logos-world.net/wp-content/uploads/2021/02/British-Airways-Logo.png",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$354",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "Air France",
    image: "https://www.logo.wine/a/logo/Air_France/Air_France-Logo.wine.svg",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$120",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "Singapore Airlines",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/1200px-Singapore_Airlines_Logo_2.svg.png",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$206",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "Turkish Airlines",
    image:
      "https://1000logos.net/wp-content/uploads/2020/04/Turkish_Airlines_logo.png",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$800",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "Etihad Airways",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Etihad-airways-logo.svg/1024px-Etihad-airways-logo.svg.png",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$900",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "Thai Airways",
    image:
      "https://download.logo.wine/logo/Thai_Airways/Thai_Airways-Logo.wine.png",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$400",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "Japan Airlines",
    image: "https://logowik.com/content/uploads/images/japan-airlines5379.jpg",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$1200",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "Korean Air",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8VF-FDlz5QWZfXpqQQB2DdSO-957ZoGJmA&shttps://example.com/koreanair_logo.png",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$700",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "Cathay Pacific",
    image:
      "https://1000logos.net/wp-content/uploads/2020/04/Cathay-Pacific-Logo.jpg",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$1500",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "Alaska Airlines",
    image: "https://s42662.pcdn.co/wp-content/uploads/Alaska-Airlines-logo.png",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$100",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "Delta Airlines",
    image:
      "https://download.logo.wine/logo/Delta_Air_Lines/Delta_Air_Lines-Logo.wine.png",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$2000",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "American Airlines",
    image:
      "https://s202.q4cdn.com/986123435/files/doc_downloads/logos/american-airlines/THUMB-aa_aa__ahz_4cp_grd_pos-(1).png",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$987",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "United Airlines",
    image:
      "https://download.logo.wine/logo/United_Airlines/United_Airlines-Logo.wine.png",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$684",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "Austrian Airlines",
    image: "https://airhex.com/images/airline-logos/alt/austrian-airlines.png",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$554",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "Swiss International Air Lines",
    image:
      "https://www.logo.wine/a/logo/Swiss_International_Air_Lines/Swiss_International_Air_Lines-Logo.wine.svg",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$336",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "Finnair",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVOPigTMVRKj3fJyJGum5NGJI86SVgLiduVA&s",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$258",
    reviews: 54,
    rating: 4.2,
  },
  {
    airline: "Aeroflot",
    image: "https://download.logo.wine/logo/Aeroflot/Aeroflot-Logo.wine.png",
    departure_time: "12:00 pm",
    arrival_time: "01:28 pm",
    duration: "2h 28m",
    route: "EWR-BNA",
    price: "$963",
    reviews: 54,
    rating: 4.2,
  },
];

const FlightListing = () => {
  return (
    <>
      <SortBox />
      <div className="my-5 bg-">
        <Row gutter={[20, 20]}>
          {flights.map((v, i) => (
            <Col key={i} xs={24}>
              <ListingCard
                airline={v.airline}
                image={v.image}
                departure_time={v.departure_time}
                arrival_time={v.arrival_time}
                duration={v.duration}
                route={v.route}
                price={v.price}
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
