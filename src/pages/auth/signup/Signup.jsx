import LogoSvg from "../../../assets/svg/logo.svg";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.scss";

// firebase imports
import { auth,db,storage } from "../../../utils/firebase";
import { createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {

  const [isLoading,setIsLoading] =useState(true);
  const navigate = useNavigate();
  const [checkField, setCheckField] = useState(true);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tremandCondition, setTremandCondition] = useState(false);
  const [alert,setAlert] = useState(false);

  useEffect(() => {
    setIsLoading(false)
    if (
      firstname.trim() &&
      lastname.trim() &&
      email.trim() &&
      email.includes("@") &&
      email.includes(".com")&&
      phone.trim() &&
      password.trim() &&
      confirmPassword.trim() &&
      password === confirmPassword &&
      tremandCondition &&
      phone.length == 11
    ) {
      setCheckField(false);
    }else{
      setCheckField(true);
    }

  },[firstname,lastname,email,phone,password,confirmPassword,tremandCondition])

  const handleSignup = async () => {  
    setIsLoading(true);
    try {
      const tempObj = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        isTrem: tremandCondition,
      };
      const {user} = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: `${firstname}`, 
      })
       await setDoc(doc(db, "Users", user.uid), tempObj);
      await signOut(auth)
      setIsLoading(false);
      navigate("/auth")
    } catch (error) {
      setAlert(error.message) 
      if(error.message === "Firebase: Error (auth/email-already-in-use)."){
        setAlert("User already register")
        setIsLoading(false);
      }else{
        setAlert(error.message)
        setIsLoading(false);

      }
    }
  };

  return (
    <>
    <div className={`absolute w-full h-full bg-white z-50 animate-pulse overflow-hidden items-center justify-center text-3xl md:text-5xl ${isLoading ? "flex" : "hidden"}`}>
    Loading...
  </div>
    <div className="form-main-conatiner">
      <img className="w-fit" src={LogoSvg} alt="" />
      <div className="form-box">
        <div className="form-text">
          <div className="form-title">Sign Up</div>
          <div className="form-subtitle">
            Let’s get you all st up so you can access your personal account.
          </div>
        </div>
        <div className="form-field-main">
        <div className={`alert-box ${alert ? "block" : "hidden" }`}>
           {alert}
          </div>
          <Row gutter={[20, 20]}>
            <Col xs={24} md={12}>
              <div className="form-field">
                <span>First Name</span>
                <input
                  type="text"
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstname}
                  placeholder="First Name"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="form-field">
                <span>Last Name</span>
                <input
                  type="text"
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                  placeholder="Last Name"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="form-field">
                <span>Email</span>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="email@gmail.com"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="form-field">
                <span>Phone Number</span>
                <input
                  type="number"
                  maxLength={11}
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  placeholder="03000000000"
                />
              </div>
            </Col>
          </Row>

          <div className="form-field">
            <span>Password</span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
          </div>
          <div className="form-field">
            <span>Confirm Password</span>
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex justify-between auth-remember">
            <span className="flex items-center gap-2 ">
              <input
                type="checkbox"
                onChange={(e) => setTremandCondition(e.target.checked)}
                checked={tremandCondition}
              />
              I agree to all the Terms and Privacy Policies
            </span>
          </div>
        </div>
        <div className="auth-btn-section">
          <button onClick={handleSignup} disabled={checkField} style={checkField ? {opacity:0.7} : {opacity:1}} >
            Create account
          </button>
          <div>
            Already have an account?
            <Link className="ms-2" to={"/auth"}>Login</Link>
          </div>
        </div>

        <div className="auth-divider-line">
          <div className="divider-line"></div>
          <span>Or Signup with</span>
        </div>

        <div className="login-social-btn mb-24">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 12.0733C24 5.40546 18.6274 0 12 0C5.37262 0 0 5.40536 0 12.0733C0 18.0994 4.38825 23.0943 10.125 24V15.5633H7.07812V12.0733H10.125V9.41343C10.125 6.38755 11.9166 4.71615 14.6575 4.71615C15.9705 4.71615 17.3438 4.95195 17.3438 4.95195V7.92313H15.8306C14.3398 7.92313 13.875 8.85381 13.875 9.80864V12.0733H17.2031L16.6711 15.5633H13.875V24C19.6117 23.0943 24 18.0995 24 12.0733Z"
                fill="#1877F2"
              />
            </svg>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                fill="#FFC107"
              />
              <path
                d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z"
                fill="#FF3D00"
              />
              <path
                d="M12.0002 22C14.5832 22 16.9302 21.0115 18.7047 19.404L15.6097 16.785C14.5719 17.5742 13.3039 18.001 12.0002 18C9.39916 18 7.19066 16.3415 6.35866 14.027L3.09766 16.5395C4.75266 19.778 8.11366 22 12.0002 22Z"
                fill="#4CAF50"
              />
              <path
                d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                fill="#1976D2"
              />
            </svg>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5172 12.5555C17.5078 10.957 18.232 9.75234 19.6945 8.86406C18.8766 7.69219 17.6391 7.04766 16.0078 6.92344C14.4633 6.80156 12.7734 7.82344 12.1547 7.82344C11.5008 7.82344 10.0055 6.96563 8.82891 6.96563C6.40078 7.00313 3.82031 8.90156 3.82031 12.7641C3.82031 13.9055 4.02891 15.0844 4.44609 16.2984C5.00391 17.8969 7.01484 21.8133 9.1125 21.75C10.2094 21.7242 10.9852 20.9719 12.4125 20.9719C13.7977 20.9719 14.5148 21.75 15.7383 21.75C17.8547 21.7195 19.6734 18.1594 20.2031 16.5563C17.3648 15.218 17.5172 12.6375 17.5172 12.5555ZM15.0539 5.40703C16.2422 3.99609 16.1344 2.71172 16.0992 2.25C15.0492 2.31094 13.8352 2.96484 13.1437 3.76875C12.382 4.63125 11.9344 5.69766 12.0305 6.9C13.1648 6.98672 14.2008 6.40313 15.0539 5.40703Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Signup;
