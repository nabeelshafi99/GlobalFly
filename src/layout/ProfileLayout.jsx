import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { FaUser } from "react-icons/fa";
import "./profileLayout.scss";
import { useContext, useEffect, useState } from "react";
import { UserProvider } from "../context/UserContext";
import { Outlet, useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../utils/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const ProfileLayout = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserProvider);
  const [isLoading,setIsLoading] = useState(false)
  const [accountInfo, setAccountInfo] = useState(null);
  const [change, setChange] = useState(false);

  useEffect(() => {
    if (user && user.uid && !isLoading) {
      setIsLoading(false); 
      handleFetch();
    }
  }, [user, isLoading]);

  const handleFetch = async () => {
    try {
      const currentUser = user.uid;
      const docRef = doc(db, "Users", currentUser);
      const res = await getDoc(docRef);
      if (res.exists()) {
        setAccountInfo(res.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false)
    }
  };

  const handleImg = (ins) => {
    setIsLoading(true);
    const avatar = document.getElementById("uploadAvatar");
    const cover = document.getElementById("uploadCover");
    if (ins === "cover") {
      cover.click();
      cover.addEventListener("change", async (e) => {
        try {
          if (e.target.files[0]) {
            await uploadBytesResumable(
              ref(storage, `Users/${user.uid}-coverimg`),
              e.target.files[0]
            );
            const resUrl = await getDownloadURL(
              ref(storage, `Users/${user.uid}-coverimg`)
            );
            await updateDoc(doc(db, "Users", user.uid), {
              coverImg: resUrl,
            });
          }
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false); 
        }
      });
    } else {
      avatar.click();
      avatar.addEventListener("change", async (e) => {
        try {
          if (e.target.files[0]) {
            await uploadBytesResumable(
              ref(storage, `Users/${user.uid}-avatar`),
              e.target.files[0]
            );
            const resUrl = await getDownloadURL(
              ref(storage, `Users/${user.uid}-avatar`)
            );
            await updateDoc(doc(db, "Users", user.uid), {
              avatar: resUrl,
            });
          }
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false); 
        }
      });
    }
  };

  const handleClick = (link) => {
    navigate(`/profile/${link}`);
  };

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
        className={`profile-main-container overflow-hidden ${
          isLoading ? `hidden` : "block"
        }`}
      >
        <input type="file" className="hidden" id="uploadAvatar" />
        <input type="file" className="hidden" id="uploadCover" />
        <Header />
     
        <div className="profile-top-container mb-5">
          <div className="profile-cover-img relative z-1">
            <img
              src={
                accountInfo?.coverImg
                  ? accountInfo.coverImg
                  : "https://marketplace.canva.com/EAE8OcQE8xs/1/0/1600w/canva-modern-gaming-cover-youtube-channel-art-RdH0ndaf7eo.jpg"
              }
              alt=""
            />
            <span
              onClick={() => handleImg("cover")}
              style={{
                fontSize: "12px",
                cursor: "pointer",
                backgroundColor: "#8DD3BB",
              }}
              className="z-20 absolute right-2 bottom-5 md:right-10 py-2 px-2 bg-slate-200"
            >
              Upload new cover
            </span>
          </div>
          <div className="profile-avatar-main">
            <div className="profile-avatar flex justify-center items-center relative z-1">
              {accountInfo?.avatar ? (
                <img src={accountInfo.avatar} alt="" />
              ) : (
                <FaUser className="text-6xl" />
              )}
              <span onClick={() => handleImg("avatar")}>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3103 6.06L4.55422 18.8475L3.78125 20.7187L5.6525 19.9458L18.44 7.18968L17.3103 6.06ZM19.8627 3.50812L19.31 4.06031L20.4397 5.19L20.9923 4.63734C21.1374 4.49222 21.2188 4.29546 21.2188 4.09031C21.2188 3.88516 21.1374 3.6884 20.9923 3.54328L20.9572 3.50812C20.8853 3.43625 20.8 3.37923 20.7061 3.34034C20.6122 3.30144 20.5116 3.28142 20.4099 3.28142C20.3083 3.28142 20.2076 3.30144 20.1137 3.34034C20.0198 3.37923 19.9345 3.43625 19.8627 3.50812Z"
                    stroke="black"
                    strokeWidth="2.0625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            <div className="profile-content">
              <div className="profile-name">{user.displayName}</div>
              <div className="profile-email">{user.email}</div>
            </div>
          </div>
        </div>

        <div className="profile-layout-deatils">
          <div className="profile-ticket-content p-5">
            <div onClick={() => handleClick("")}>Account</div>
            <span className="divider"></span>
            <div onClick={() => handleClick("")}>History</div>
            <span className="divider"></span>
            <div onClick={() => handleClick("ticketbooking")}>
              Ticket/Booking
            </div>
            <span className="divider"></span>
            <div onClick={() => handleClick("paymentmethod")}>
              Payment methods
            </div>
          </div>
        </div>

        <div className="profile-layout-deatils">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProfileLayout;
