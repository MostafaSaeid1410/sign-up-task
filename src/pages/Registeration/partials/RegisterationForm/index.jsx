import React, { useState } from 'react';
import './index.scss';
import Input from '../../../../components/ui/Input';
import egFlag from '../../../../assets/icons/ic_language_ar.svg';
import arrowUp from '../../../../assets/icons/chevron-down.svg';
import Button from '../../../../components/ui/Button';
export default function RegisterationForm() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (event) => {
    // Remove non-numeric characters from the input
    setPhoneNumber(event.target.value);
  };
  return (
    <form className="form">
      <Input label="Name*" placeholder="Enter your name" type="text" />
      <Input label="Email*" placeholder="Enter your email" type="email" />
      <Input
        label="Phone Number*"
        placeholder="+2 (100) 123-34567"
        type="tel"
        onChange={handlePhoneNumberChange}
        value={phoneNumber}
        prefix={
          <div className="input-prefix__container">
            <img src={egFlag} /> <img src={arrowUp} />{' '}
          </div>
        }
      />
      <div className="password-input__container">
        <Input label="Password*" placeholder="Create a password" type="email" />
        <p className="password-condition-para">
          Must be at least 8 characters.
        </p>
      </div>
      {/* <PhoneInputCountryCode /> */}
      <Button className="btn--primary ">Get started</Button>
    </form>
  );
}
