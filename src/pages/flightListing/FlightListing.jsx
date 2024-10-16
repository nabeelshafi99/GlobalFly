import { Col, Row } from "antd";
import ListingCard from "../../components/listingCard/ListingCard";
import SortBox from "../../components/sortBox/SortBox";



const FlightListing =() => {
    return(
        <>
        <SortBox />
        <div className="my-5 bg-">
            <Row gutter={[20,20]}>
                <Col xs={24}>
            <ListingCard  />
                </Col>
                <Col xs={24}>
            <ListingCard  />
                </Col>
                <Col xs={24}>
            <ListingCard  />
                </Col>
                <Col xs={24}>
            <ListingCard  />
                </Col>
            </Row>
        </div>
        </>
    )
}


export default FlightListing;