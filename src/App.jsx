import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import FlightListing from "./pages/flightListing/FlightListing";
 import FlightDetail from "./pages/flightDetail/FlightDetail";
 import FlightFlow from "./pages/flightflow/FlightFlow";
import LandingLayout from "./layout/LandingLayout";
import FlowLayout from "./layout/FlowLayout";
import HotelFLow from "./pages/hotelFlow/HotelFlow";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import ProfileLayout from "./layout/ProfileLayout";
import Account from "./pages/profile/Accout";
import PatmentMethod from "./pages/profile/PaymentMethod";
import TicketBooking from "./pages/profile/TicketBooking";
import ListingLayout from "./layout/ListingLayout";
import HotelListing from "./pages/hotelListing/HotelListing";
import Checkout from "./pages/checkout/Checkout.jsx";
import Ticket from "./pages/ticket/Ticket.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/flow" element={<FlowLayout />}>
          <Route path="/flow" element={<FlightFlow />} />
          <Route path="/flow/hotel" element={<HotelFLow />} />
          <Route path="/flow/flight/:id" element={<FlightDetail />} /> 
          <Route path="/flow/checkout/:id" element={<Checkout />} /> 
          <Route path="/flow/download/:id" element={<Ticket />} /> 
        </Route>
        <Route path="/auth" element={<AuthLayout  />}>
          <Route path="/auth" element={<Login />} />
          <Route path="/auth/register" element={<Signup  />} />
        </Route>
        <Route path="/profile" element={<ProfileLayout />}>
          <Route path="/profile" element={<Account />} />
          <Route path="/profile/payment" element={<PatmentMethod />} />
          <Route path="/profile/ticketbooking" element={<TicketBooking />} />
        </Route>
        <Route path="/listing" element={<ListingLayout />}>
          <Route path="/listing" element={<FlightListing />} />
          <Route path="/listing/hotel" element={<HotelListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
