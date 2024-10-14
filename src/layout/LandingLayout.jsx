import { Outlet } from "react-router-dom";
// import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";

const LandingLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false)
  },[])
  return (
    <>
  <div
  className={`absolute w-full h-screen bg-white z-50 animate-pulse overflow-hidden items-center justify-center text-3xl md:text-5xl ${
    isLoading ? "flex" : "hidden"
  }`}
>
  Loading...
</div>
      <div
        className={`absolute w-full h-screen bg-white z-50 animate-pulse overflow-hidden items-center justify-center text-3xl md:text-5xl ${
          isLoading ? "flex" : "hidden"
        }`}
      >
        Loading...
      </div>
      <div className={isLoading ? `hidden` : "block"}>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default LandingLayout;
