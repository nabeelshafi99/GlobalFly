import ListingCard from "../../components/listingCard/ListingCard";
import SortBox from "../../components/sortBox/SortBox";



const FlightListing =() => {
    return(
        <>
        <SortBox />
        <div className="my-5 bg-white">
            <ListingCard />
        </div>
        </>
    )
}


export default FlightListing;