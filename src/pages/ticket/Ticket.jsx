import { useNavigate, useParams } from "react-router-dom";
import "./fligthDetail.scss";
import flightData from "../../data/FlightData";
import { Col, Row } from "antd";
import ListingCard from "../../components/listingCard/ListingCard";

const FlightDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = flightData[id - 1];
  console.log(data);
  const BookNow = (id) => {
    navigate(`/flow/checkout/${id}`);
  };

  const handleClick = (id) => {
    navigate(`/flow/flight/${id}`);
  };

  return (
    <div className="main-box">
      <div className="flex justify-between">
        <div>
          <div className="text-sm md:text-xl font-bold">{data.airline}</div>
          <div>
            <div className="flex  gap-3 items-center my-2">
              <span>
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 0C2.24312 0 0 2.14531 0 4.78125C0 6.03656 0.572187 7.70594 1.70062 9.74312C2.60687 11.3787 3.65531 12.8578 4.20062 13.5938C4.29277 13.7195 4.41325 13.8218 4.5523 13.8923C4.69134 13.9627 4.84504 13.9995 5.00094 13.9995C5.15683 13.9995 5.31053 13.9627 5.44958 13.8923C5.58862 13.8218 5.70911 13.7195 5.80125 13.5938C6.34563 12.8578 7.395 11.3787 8.30125 9.74312C9.42781 7.70656 10 6.03719 10 4.78125C10 2.14531 7.75688 0 5 0ZM5 7C4.60444 7 4.21776 6.8827 3.88886 6.66294C3.55996 6.44318 3.30362 6.13082 3.15224 5.76537C3.00087 5.39991 2.96126 4.99778 3.03843 4.60982C3.1156 4.22186 3.30608 3.86549 3.58579 3.58579C3.86549 3.30608 4.22186 3.1156 4.60982 3.03843C4.99778 2.96126 5.39991 3.00087 5.76537 3.15224C6.13082 3.30362 6.44318 3.55996 6.66294 3.88886C6.8827 4.21776 7 4.60444 7 5C6.99942 5.53026 6.78852 6.03863 6.41357 6.41357C6.03863 6.78852 5.53026 6.99942 5 7Z"
                    fill="#112211"
                  />
                </svg>
              </span>
              <span className="text-xs md:text-sm">{data.location}</span>
            </div>
          </div>
          <div className="flex flex-1 items-center gap-2">
            <span className="border py-1 px-3">{data.rating}</span>
            <span className="flex md:gap-3 items-center flex-col md:flex-row ">
              <span className="listing-rating-text">Very Good</span>
              <span className="listing-rating-review">
                {data.reviews} reviews
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end">
          <div className="text-xl md:text-2xl font-bold mb-2">
            ${" "}
            {Math.round(
              (data.price / 100) * 10 +
                (data.price / 100) * 20 +
                (data.price / 100) * 50 +
                (data.price / 100) * 60
            )}
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <span className="flex gap-1">
              <button className="border py-2 px-4">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7863 1.125C10.2504 1.125 9.0004 3.625 9.0004 3.625C9.0004 3.625 7.7504 1.125 5.21446 1.125C3.15352 1.125 1.52149 2.84922 1.5004 4.90664C1.45743 9.17734 4.88829 12.2145 8.64884 14.7668C8.75251 14.8373 8.87501 14.8751 9.0004 14.8751C9.12579 14.8751 9.24829 14.8373 9.35196 14.7668C13.1121 12.2145 16.543 9.17734 16.5004 4.90664C16.4793 2.84922 14.8473 1.125 12.7863 1.125V1.125Z"
                    stroke="#112211"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="border py-2 px-4">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1866 12.915L11.2024 12.9239L11.215 12.9107C11.4455 12.6697 11.7225 12.4778 12.0292 12.3468C12.336 12.2158 12.6661 12.1483 12.9996 12.1484C13.5168 12.1484 14.0211 12.3103 14.4417 12.6114C14.8622 12.9126 15.1779 13.3378 15.3445 13.8275C15.511 14.3172 15.5201 14.8468 15.3704 15.3419C15.2206 15.837 14.9197 16.2728 14.5097 16.5881C14.0997 16.9034 13.6012 17.0825 13.0843 17.1001C12.5673 17.1178 12.0578 16.9731 11.6273 16.6865C11.1968 16.3998 10.8668 15.9855 10.6837 15.5018C10.5005 15.0181 10.4735 14.4891 10.6062 13.9892L10.6109 13.9717L10.5951 13.9628L4.81383 10.71L4.798 10.7011L4.78543 10.7142C4.44333 11.0709 4.00234 11.3171 3.51918 11.4211C3.03602 11.5251 2.5328 11.4822 2.07425 11.2978C1.6157 11.1135 1.22279 10.7961 0.946072 10.3866C0.669354 9.97714 0.521484 9.49422 0.521484 9C0.521484 8.50578 0.669354 8.02286 0.946072 7.61336C1.22279 7.20387 1.6157 6.88654 2.07425 6.70218C2.5328 6.51783 3.03603 6.47489 3.51918 6.57889C4.00234 6.68289 4.44333 6.92907 4.78543 7.28575L4.798 7.29887L4.81383 7.28996L10.5951 4.03722L10.6109 4.02832L10.6062 4.01076C10.4516 3.4303 10.5139 2.81338 10.7815 2.27558C11.0491 1.73777 11.5036 1.31598 12.0599 1.08922C12.6161 0.862465 13.236 0.846301 13.8033 1.04376C14.3706 1.24122 14.8465 1.63875 15.1418 2.16188C15.437 2.68501 15.5314 3.29784 15.4073 3.88557C15.2831 4.4733 14.9489 4.9956 14.4673 5.35462C13.9857 5.71364 13.3897 5.88475 12.791 5.83589C12.1923 5.78703 11.6319 5.52155 11.2149 5.0892L11.2023 5.07616L11.1866 5.08504L5.4053 8.33778L5.38947 8.34668L5.39415 8.36423C5.50508 8.78082 5.50508 9.21918 5.39415 9.63577L5.38947 9.65332L5.4053 9.66222L11.1866 12.915Z"
                    fill="black"
                    stroke="#112211"
                    strokeWidth="0.046875"
                  />
                </svg>
              </button>
            </span>
            <button
              onClick={() => BookNow(data.id)}
              style={{ height: "35px", background: "#8DD3BB" }}
              className="border px-4 text-xs"
            >
              Download
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white flex mt-4 justify-between p-5">
          <div>
            <div className="text-sm font-bold">{data.arrival_time}</div>
            <div>
              <svg
                width="38"
                height="93"
                viewBox="0 0 38 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.25"
                  d="M37 0.5L19 10.5M1 0.5L19 10.5M19 10.5V26.5"
                  stroke="#112211"
                  strokeWidth="0.5"
                />
                <path
                  opacity="0.2"
                  d="M22.4331 35.2926L19.0839 36.2226C19.0586 36.2295 19.0337 36.2378 19.0094 36.2475L22.4331 35.2926ZM22.4331 35.2926C22.7898 35.1919 23.0392 35.302 23.1859 35.4126M22.4331 35.2926L23.1859 35.4126M23.1859 35.4126C23.2845 35.4869 23.3643 35.5833 23.4188 35.694C23.4734 35.8047 23.5012 35.9267 23.5 36.0501V36.937C23.5 37.4165 23.2848 37.882 22.9375 38.1558L20.9664 39.7762L23.1859 35.4126ZM28.7266 41.9995L28.7266 43.2607C28.7231 43.4331 28.6808 43.6024 28.6029 43.7563C28.525 43.9101 28.4134 44.0445 28.2764 44.1493L28.2764 44.1493L28.2757 44.1499L21.1507 50.0116L21.1419 50.0188L21.1422 50.0303L21.2134 52.7383L21.2135 52.7389C21.2242 52.9364 21.228 53.4852 21.228 53.6123C21.2273 54.9055 21.0169 55.9354 20.633 56.6411C20.2496 57.3458 19.6941 57.7261 19 57.7261C18.7813 57.7261 18.4693 57.6824 18.1474 57.4926C17.8257 57.3028 17.4925 56.9662 17.2327 56.3774L17.2327 56.3774C16.9251 55.6816 16.7687 54.7515 16.7687 53.6114C16.7687 53.4856 16.7725 52.9383 16.7833 52.738L16.7833 52.7373L16.8555 50.0298L16.8558 50.0184L16.8469 50.0111L9.72195 44.1349L9.72132 44.1344C9.58495 44.0295 9.47389 43.8952 9.39637 43.7416C9.31887 43.588 9.27686 43.419 9.27344 43.2471V41.9995C9.27348 41.8781 9.30397 41.7586 9.36212 41.6519C9.42027 41.5453 9.50423 41.4549 9.60631 41.3891C9.7084 41.3233 9.82536 41.2841 9.94649 41.2752C10.0676 41.2662 10.1891 41.2878 10.2997 41.3379L16.9677 44.3595L17 44.3741L17.0008 44.3386L17.1016 39.8016L17.1018 39.7902L17.093 39.783L15.0882 38.1283L15.0879 38.1281C14.8904 37.971 14.7502 37.8317 14.6588 37.6535C14.5674 37.4754 14.5234 37.2561 14.5234 36.937L14.5234 36.097L14.5234 36.0963C14.5193 35.967 14.5463 35.8387 14.6023 35.7221C14.6583 35.6056 14.7415 35.5043 14.8449 35.4268C14.9906 35.3187 15.2381 35.2116 15.5935 35.3161L15.5939 35.3162L18.9219 36.2452C18.9219 36.2452 18.9219 36.2452 18.9219 36.2452C18.946 36.252 18.9701 36.2602 18.9939 36.2694L18.9938 36.2697L18.9977 36.2705C19.0031 36.2715 19.0086 36.2715 19.014 36.2705L19.0141 36.2708L19.018 36.2693C19.0416 36.2599 19.0656 36.2519 19.09 36.2453L19.0902 36.2452L22.4394 35.3152L22.4395 35.3152C22.7879 35.2168 23.0298 35.3243 23.1718 35.4314L23.1718 35.4314C23.2675 35.5034 23.3449 35.597 23.3978 35.7044C23.4507 35.8118 23.4777 35.9302 23.4766 36.0499V36.0501V36.937C23.4766 37.41 23.2642 37.8685 22.923 38.1374L22.923 38.1374L22.9226 38.1377L20.9515 39.7581L20.9428 39.7653L20.943 39.7766L21.0105 44.3385L21.011 44.3742L21.0436 44.3595L27.6998 41.3388C27.8104 41.2887 27.9318 41.267 28.053 41.2759C28.1741 41.2847 28.2911 41.3238 28.3932 41.3895C28.4953 41.4552 28.5793 41.5455 28.6376 41.6521C28.6958 41.7586 28.7264 41.8781 28.7266 41.9995Z"
                  fill="#112211"
                  stroke="#112211"
                  strokeWidth="0.046875"
                />
                <path
                  opacity="0.25"
                  d="M37 92.5L19 82.5M1 92.5L19 82.5M19 82.5V66.5"
                  stroke="#112211"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            <div className="text-sm font-bold">{data.departure_time}</div>
          </div>
          <div>
            <div className="flex justify-center bg-yellow-50 p-2 md:p-5">
              <div>
                <div className="text-sm font-bold">James Doe</div>
                <div className="text-xs ">Boarding Pass N’123</div>
              </div>
              <div className="text-xs">Busniess Class</div>
            </div>
          </div>

          <div className="md:flex hidden">Right</div>
        </div>
      </div>

      <div className="my-5">
        <h1 className="text-2xl font-bold">Terms and Conditions</h1>
        <h2 className="font-bold my-2">Payments</h2>
        <p className="my-2">
          If you are purchasing your ticket using a debit or credit card via the
          Website, we will process these payments via the automated secure
          common payment gateway which will be subject to fraud screening
          purposes.{" "}
        </p>
        <p className="my-2">
          If you do not supply the correct card billing address and/or
          cardholder information, your booking will not be confirmed and the
          overall cost may increase. We reserve the right to cancel your booking
          if payment is declined for any reason or if you have supplied
          incorrect card information. If we become aware of, or is notified of,
          any fraud or illegal activity associated with the payment for the
          booking, the booking will be cancelled and you will be liable for all
          costs and expenses arising from such cancellation, without prejudice
          to any action that may be taken against us.
        </p>
        <p className="my-2">
          Golobe may require the card holder to provide additional payment
          verification upon request by either submitting an online form or
          visiting the nearest Golobe office, or at the airport at the time of
          check-in. Golobe reserves the right to deny boarding or to collect a
          guarantee payment (in cash or from another credit card) if the card
          originally used for the purchase cannot be presented by the cardholder
          at check-in or when collecting the tickets, or in the case the
          original payment has been withheld or disputed by the card issuing
          bank. Credit card details are held in a secured environment and
          transferred through an internationally accepted system.
        </p>
      </div>
    </div>
  );
};

export default FlightDetail;
