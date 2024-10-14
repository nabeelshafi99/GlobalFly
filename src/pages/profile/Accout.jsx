import "./genralProfile.scss";
import { UserProvider } from "../../context/UserContext";
import { useState } from "react";
import { useContext } from "react";

// firebase imports
import { db } from "../../utils/firebase";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";

const Account = () => {
  const [accountInfo, setAccountInfo] = useState(false);
  const { user, setUser} = useContext(UserProvider);
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    const handleFetch = async () => {
      setIsLoading(true)
      try {
        if (user.uid) {
          const currentUser = await user.uid;
          const docRef = doc(db, "Users", currentUser);
          const res = await getDoc(docRef);
          setAccountInfo(res.data());
          setIsLoading(false)
        }
      } catch (error) {
        console.log("error", error);
        setIsLoading(false)
      }
    };
    handleFetch();
  }, [user]);

  return (
    <>
      <h1 className="profile-title-heading ms-2 ">Account</h1>
      <div className="profile-account-content p-5">
        <div className="profile-account-title-top">
          <div className="profile-account-heading">Name</div>
          <div className="profile-account-title">{`${accountInfo.firstname} ${accountInfo.lastname}`}</div>
        </div>
        <button className="border px-5 py-3">Change</button>
      </div>
      <div className="profile-account-content p-5">
        <div className="profile-account-title-top">
          <div className="profile-account-heading">Email</div>
          <div className="profile-account-title">{`${accountInfo.email}`}</div>
        </div>
        <button className="border px-5 py-3">Change</button>
      </div>
      <div className="profile-account-content p-5">
        <div className="profile-account-title-top">
          <div className="profile-account-heading">Password</div>
          <div className="profile-account-title">************</div>
        </div>
        <button className="border px-5 py-3">Change</button>
      </div>
      <div className="profile-account-content p-5">
        <div className="profile-account-title-top">
          <div className="profile-account-heading">Phone Number</div>
          <div className="profile-account-title">{`${accountInfo.phone}`}</div>
        </div>
        <button className="border px-5 py-3">Change</button>
      </div>
      <div className="profile-account-content p-5">
        <div className="profile-account-title-top">
          <div className="profile-account-heading">Address</div>
          <div className="profile-account-title">{`${accountInfo.address ? accountInfo.address : "null"}`}</div>
        </div>
        <button className="border px-5 py-3">Change</button>
      </div>
      <div className="profile-account-content p-5">
        <div className="profile-account-title-top">
          <div className="profile-account-heading">Date of Birth</div>
          <div className="profile-account-title">{`${accountInfo.dateofbirth   ? accountInfo.dateofbirth : "null"}`}</div>
        </div>
        <button className="border px-5 py-3">Change</button>
      </div>
    </>
  );
};

export default Account;
