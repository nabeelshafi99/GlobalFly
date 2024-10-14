import "./genralProfile.scss";

import TicketBookingCard from "../../components/ticketbookingcard/TicketBookingCard";

const TicketBooking = () => {
  return (
    <>
      <h1 className="profile-title-heading ms-2 ">Tickets/Booking</h1>
      <div className="profile-ticket-content p-5 mb-5">
        <div>Flight</div>
        <span className="divider"></span>
        <div>Stays</div>
      </div>
      <div className="profile-ticket-detail mb-5 p-5">
      <TicketBookingCard />
      </div>
    </>
  );
};

export default TicketBooking;
