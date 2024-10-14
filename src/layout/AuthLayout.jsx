import { Outlet, useNavigate } from "react-router-dom";
import AuthImg1 from "../assets/images/authImg1.jpg";
import AuthImg2 from "../assets/images/authImg2.jpg";
import "./layout.scss";
import { useContext, useEffect, useState } from "react";
import {UserProvider} from "../context/UserContext";

const AuthLayout = () => {
const navigate = useNavigate()
  const {user,setUser} = useContext(UserProvider)
  useEffect(() => {
    if(user){
      navigate("/")
    }
  })

  const [img,setImg] = useState(AuthImg1)
  useEffect(()=> {
    setTimeout(()=>{
      setImg(img === AuthImg1 ? AuthImg2 : AuthImg1);
    },6000)
  },[img])
  return (
    <div className="auth-layout-main">
      <div className="auth-layout-img-main ">
        <div className="auth-layout-img-container">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="auth-layout-content-main">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
