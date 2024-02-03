import React, { useState } from 'react';
import './index.scss';
import Input from '../../../../components/ui/Input';
import egFlag from '../../../../assets/icons/ic_language_ar.svg';
import arrowUp from '../../../../assets/icons/chevron-down.svg';
import Button from '../../../../components/ui/Button';
import earthIcon from '../../../../assets/icons/Earth.svg';
export default function RegisterationForm({ onSecondStepClick }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  return (
    <div className="RegisterationForm__container">
      <form className="form form-registeration">
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
          <Input
            label="Password*"
            placeholder="Create a password"
            type="email"
          />
          <p className="password-condition-para">
            Must be at least 8 characters.
          </p>
        </div>
        {/* <PhoneInputCountryCode /> */}
        <Button
          className="btn--primary "
          onClick={(e) => {
            console.log('🚀 ~ RegisterationForm ~ e:', e);

            e.preventDefault();
            onSecondStepClick((prev) => prev + 1);
          }}
        >
          Get started
        </Button>
      </form>
      <div className="RegisterationForm__container__haveAccount">
        <span className="RegisterationForm__container__haveAccount-para">
          Already have an account?
        </span>
        <Button className={'btn--secondary'}>Log in</Button>
      </div>
      <Button className="RegisterationForm__container__localisation-btn">
        <span className="RegisterationForm__container__localisation-btn_txt">
          عربي
        </span>
        <img src={earthIcon} alt="" />
      </Button>
    </div>
  );
}
