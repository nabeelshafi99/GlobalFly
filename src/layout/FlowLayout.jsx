import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";

import { Avatar } from "antd";

import { FaBarsStaggered } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const FlowLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const [user, setuser] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [profilePopup, setProfilePopup] = useState(false);
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const handleLogin = () => {
    setuser(true);
  };
  const handleSignup = () => {
    setuser(true);
  };
  const handleProfile = () => {
    setProfilePopup(!profilePopup ? true : false);
  };

  useEffect(() => {
    setIsLoading(false)
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     <div
        className={`absolute w-full h-screen bg-white z-50 animate-pulse overflow-hidden items-center justify-center text-3xl md:text-5xl ${
          isLoading ? "flex" : "hidden"
        }`}
      >
        Loading...
      </div>

    <div className={isLoading ?  `hidden` : "block"}>
      <Header />
      <Outlet />
      <Footer />
      </div>
    </>
  );
};

export default FlowLayout;
