import { Col, Row } from "antd";
import BankCard from "../../components/bankCard/BankCard";
import "./genralProfile.scss";
import { useState } from "react";
import PopupBox from "../../components/modal/Modal";

const PatmentMethod = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <h1 className="profile-title-heading ms-2 ">Payment methods</h1>
      <div className="profile-payment-content p-5">
      <PopupBox modalOpen={modalOpen} setModalOpen={setModalOpen} />
    
            <BankCard />
        
            <div className="empty-bank-card-container cursor-pointer" onClick={() => setModalOpen(modalOpen ? false : true)}>
              <div className="flex flex-col items-center gap-2">
                <div>
                  <svg
                    width="64"
                    height="65"
                    viewBox="0 0 64 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M56 32.5C56 19.25 45.25 8.5 32 8.5C18.75 8.5 8 19.25 8 32.5C8 45.75 18.75 56.5 32 56.5C45.25 56.5 56 45.75 56 32.5Z"
                      stroke="#8DD3BB"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M32 22.5V42.5M42 32.5H22"
                      stroke="#8DD3BB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="empty-card-title" >Add a new card</div>
              </div>
            </div>  
      </div>
    </>
  );
};

export default PatmentMethod;