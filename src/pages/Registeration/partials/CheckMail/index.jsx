import { OTP } from './components/Otp';
import './index.scss';
import React, { useState } from 'react';
import checkMailIcon from '../../../../assets/icons/check mail icon.svg';
import Button from '../../../../components/ui/Button';
export default function CheckMail({ onSecondStepClick }) {
  const [otpValue, setotpValue] = useState(null);
  const handleInputChange = (oldPinCode) => {
    setotpValue(oldPinCode);
  };

  return (
    <div className="check-mail">
      <div className="check-mail__icon">
        <img src={checkMailIcon} alt="check mail icon" />
      </div>
      <h2 className="check-mail__header">Check your email</h2>
      <p className="check-mail__para">
        <span className="check-mail__para--note">
          We sent a verification code to
        </span>
        <span className="check-mail__para--mail">omarmouneer@gmail.com</span>
      </p>
      <div className="check-mail__otp">
        <OTP
          length={4}
          value={otpValue}
          autoFocus
          className="otpContainer"
          inputClassName="otpInput"
          onChangeOTP={(pinCode) => {
            handleInputChange(pinCode);
          }}
        />
      </div>
      <div className="check-mail__btn-container">
        <Button
          className="btn btn--primary "
          onClick={(e) => {
            e.preventDefault();
            onSecondStepClick((prev) => prev + 1);
          }}
        >
          Verify email
        </Button>
      </div>
      <div className="check-mail__recieve-mail">
        <span className="check-mail__recieve-mail_para">
          Didn’t receive the email?
        </span>
        <Button className={'btn--secondary'}>Click to resend</Button>
      </div>
    </div>
  );
}
