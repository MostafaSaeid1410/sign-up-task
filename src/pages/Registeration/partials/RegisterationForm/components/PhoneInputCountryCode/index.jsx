import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './index.scss';
export default function PhoneInputCountryCode() {
  const [phoneNumber, setPhoneNumber] = useState('initialState');
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/; // Validates a 10-digit phone number

    return phoneNumberPattern.test(phoneNumber);
  };
  return (
    <div className="phone-input__container">
      <label
        htmlFor="
"
        className="phone-input__wrapper"
      >
        Phone Number*{' '}
        <PhoneInput
          country={'eg'}
          value={phoneNumber}
          onChange={handleChange}
          Displaying
          Country
          Code
          inputProps={{
            required: true,
          }}
          disableDropdown={false}
          className="phone-input__componentWrapper"
        />
      </label>
      {!valid && <p>Please enter a valid 10-digit phone number.</p>}
    </div>
  );
}
