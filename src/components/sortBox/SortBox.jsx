
const SortBox = () => {
  return (
    <div className="bg-white p-5">
      <div className="profile-layout-deatils">
        <div className="profile-ticket-content">
          <div onClick={() => handleClick("")}>Cheapest</div>
          <span className="divider"></span>
          <div onClick={() => handleClick("")}>Best</div>
          <span className="divider"></span>
          <div onClick={() => handleClick("ticketbooking")}>Quickest</div>
          <span className="divider"></span>
          <div onClick={() => handleClick("paymentmethod")}>Other sort</div>
        </div>
      </div>
    </div>
  );
};

export default SortBox;
