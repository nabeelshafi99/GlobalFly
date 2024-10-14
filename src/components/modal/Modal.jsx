import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'antd';

import "./modal.scss";

const PopupBox = ({modalOpen,setModalOpen}) => {

  const [cardNumber,setCardNumber] = useState("")
  const [dateExpire,setDateExpire] = useState("")
  const [cvc,setCvc] = useState("")
  const [cardHolder,setCardHolder] = useState("")
  const [country,setCountry] = useState("")
  const [isCheckout,setIsCheckout] = useState("")
  
  return (
    <>
      <Modal
        centered
        footer={false}
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <div className='popup-card-main bg--500'>
       
       <h1 className='popup-card-title mb-3'>Add a new Card</h1>

        <div>
        <Row gutter={[20, 20]}>
            <Col xs={24} md={24}>
              <div className="form-field">
                <span>Card Number</span>
                <input
                  type="number"
                  onChange={(e) => setCardNumber(e.target.value)}
                  value={cardNumber}
                  placeholder="4321 4321 4321 4321"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="form-field">
                <span>Exp. Date</span>
                <input
                  type="date"
                  onChange={(e) => setDateExpire(e.target.value)}
                  value={dateExpire}
                  placeholder="02/27"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="form-field">
                <span>CVC</span>
                <input
                  type="number"
                  onChange={(e) => setCvc(e.target.value)}
                  value={cvc}
                  placeholder="123"
                />
              </div>
            </Col>
            <Col xs={24} md={24}>
              <div className="form-field">
                <span>Name on Card</span>
                <input
                  type="text"
                  onChange={(e) => setCardHolder(e.target.value)}
                  value={cardHolder}
                  placeholder="John Doe"
                />
              </div>
            </Col>
            <Col xs={24} md={24}>
              <div className="form-field">
                <span>Country or Region</span>
                <select style={{border:"none",outline:"none"}} onChange={(e) => setCountry(e.target.value)} name="" id="" className='w-full'>
                  <option value="pakistan">Pakistan</option>
                  <option value="sudia">Sudia Arabia</option>
                  <option value="turkey">Turkey</option>
                  <option value="dubai">Dubai</option>
                </select>
              </div>
            </Col>
            <Col xs={24} md={24} className='flex gap-2'>
                <input
                  type="checkbox"
                  onChange={(e) => setIsCheckout(e.target.value)}
                  value={isCheckout}
                  placeholder="John Doe"
                />
                <p style={{fontSize:"12px"}}>Securely save my information for 1-click checkout</p>
            </Col>
            <Col xs={24} md={24}>
              
              <button style={{background:" #8DD3BB",fontSize:"16px",fontWeight:600}} className='bg-slate-400 w-full py-2'>Add Card</button>

            </Col>
          </Row>
        </div>

       
        </div>
      </Modal>
    </>
  );
};
export default PopupBox;