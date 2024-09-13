import { useEffect, useState } from "react";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [verfied, setIsVerified] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

  useEffect(() => {
    return () => {
      window.recaptchaVerifier = null;
    };
  }, []);
  const sendOtp = async () => {
    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response) => {
              console.log("reCAPTCHA solved");
            },
          }
        );
      }
      const appVerifier = window.recaptchaVerifier;
      const formatPh = "+" + ph;
      console.log({ formatPh });
      const confirmation = await signInWithPhoneNumber(
        auth,
        formatPh,
        appVerifier
      );
      console.log("confirmation", confirmation);
      setUser(confirmation);
    } catch (err) {
      console.error("Error sending OTP:", err);
    }
  };

  const verifyOpt = async () => {
    try {
      await user.confirm(otp);
        setIsVerified(true);
        navigate('/feed');
    } catch (err) {
      console.error("Error verifying OTP:", err);
    }
  };

  return (
    <div className="App">
      <div className="Number-box">
        <h1>Enter your Phone Number:</h1>
        <PhoneInput country={"in"} value={ph} onChange={setPh} />
        <button onClick={sendOtp}>Next</button>
      </div>
      {user && (
        <div className="otp-box">
          <h1>Enter your OTP:</h1>
          <OtpInput
            value={otp}
            onChange={setOtp}
            OTPLength={6}
            otpType="number"
            disabled={false}
          />
          <button onClick={verifyOpt}>
            Verify OTP
          </button>
        </div>
      )}
      <div id="recaptcha-container"></div>
      {verfied && <h1>Login Success!!!</h1>}
    </div>
  );
};
