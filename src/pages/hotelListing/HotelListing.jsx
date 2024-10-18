import { Col, Row } from "antd";
import HotelListingCard from "../../components/hotelListingCard/HotelListingCard";
import SortBox from "../../components/sortBox/SortBox";



const HotelListing =() => {
    return(
        <>
        <SortBox />
        <div className="my-5 bg-">
            <Row gutter={[20,20]}>
                <Col xs={24}>
            <HotelListingCard  />
                </Col>
                <Col xs={24}>
            <HotelListingCard  />
                </Col>
                <Col xs={24}>
            <HotelListingCard  />
                </Col>
                <Col xs={24}>
            <HotelListingCard  />
                </Col>
            </Row>
        </div>
        </>
    )
}


export default HotelListing;