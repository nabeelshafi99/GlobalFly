import { Button, FloatButton } from "antd";

import "./card.scss";

const Card = ({thumbnail,title,des,price , btnTitle}) => {
  return (
    <div className="global-card">
      <img src={thumbnail} alt="" />

      <div className="card-content ">
      
        <div className="card-content-text  ">
      
          <div className="card-content-title ">
            <h1>{title}</h1>
            <p>{des}</p>
          </div>
      
          <h1 className="card-content-price">$ {price}</h1>
      
        </div>
        <Button className="global-card-btn" >{btnTitle}</Button>
      </div>
    </div>
  );
};

export default Card;
