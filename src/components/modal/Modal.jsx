import React, { useState ,useContext} from 'react';
import { Button, Col, Modal, Row } from 'antd';
import {db,auth} from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { UserProvider } from "../../context/UserContext";


import "./modal.scss";

const PopupBox = ({modalOpen,setModalOpen}) => {

  const [disable,setDisable] = useState(true)
  const [cardNumber,setCardNumber] = useState("")
  const [cardExpire,setCardExpire] = useState("")
  const [cvc,setCvc] = useState("")
  const [cardHolder,setCardHolder] = useState("")
  const [country,setCountry] = useState("pakistan")
  const [isCheckout,setIsCheckout] = useState(false)

  
  const obj = {
      cardnumber : cardNumber,
      cardexpire:cardExpire,
      cardholder : cardHolder,
      cvc : cvc ,
      region : country,
      isAdded : isCheckout
  }
  const handleAdd =async () =>{
    try{
     const user= await auth.currentUser
      obj.user = user.uid;
    await addDoc(collection(db, "BankCard"), obj)
    setModalOpen(false)
    }catch(err){
      console.log(err)
    }
  }
  const checkPoint = () => {
    const expireYear = cardExpire.split("-");
    const now = new Date()
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    console.log('on process')
 if ( (cardNumber.length === 16 || cardNumber.length === 15) &&
       cvc.length === 3  && 
        country && isCheckout &&
        (expireYear[0] > currentYear || (expireYear[0] == currentYear && expireMonth[1] >= currentMonth))
    ) {
      setDisable(false)
    }else{
      setDisable(true)
    }
  }
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
                  value={cardNumber}
                  onChange={(e) => {
                  checkPoint(e.target.value);
                  setCardNumber(e.target.value)
                  }}
                  maxLength={16}
                  placeholder="4321 4321 4321 4321"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="form-field">
                <span>Exp. Date</span>
                <input
                  type="date"
                  onChange={(e) =>{
                  checkPoint();
                  setCardExpire(e.target.value)}}
                  value={cardExpire}
                  placeholder="02/27"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="form-field">
                <span>CVC</span>
                <input
                  type="number"
                  value={cvc}
                  onChange={(e) => {
                  checkPoint();
                  setCvc(e.target.value)}}
                  placeholder="123"
                />
              </div>
            </Col>
            <Col xs={24} md={24}>
              <div className="form-field">
                <span>Name on Card</span>
                <input
                  type="text"
                  onChange={(e) => {
                checkPoint();  
                  setCardHolder(e.target.value)}}
                  value={cardHolder}
                  placeholder="John Doe"
                />
              </div>
            </Col>
            <Col xs={24} md={24}>
              <div className="form-field">
                <span>Country or Region</span>
                <select style={{border:"none",outline:"none"}} onChange={(e) => {
              checkPoint();  
                setCountry(e.target.value)}} name="" id="" className='w-full'>
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
                  onChange={(e) => {
                  checkPoint();
                  setIsCheckout(e.target.checked)}}
                  value={isCheckout}
                  placeholder="John Doe"
                />
                <p style={{fontSize:"12px"}}>Securely save my information for 1-click checkout</p>
            </Col>
            <Col xs={24} md={24}>
              
              <button disabled={disable} onClick={handleAdd} style={{background:" #8DD3BB",fontSize:"16px",fontWeight:600, opacity: disable ? "0.5" : "1"}} className='bg-slate-400 w-full py-2'>Add Card</button>

            </Col>
          </Row>
        </div>

       
        </div>
      </Modal>
    </>
  );
};
export default PopupBox;