import './index.scss';
import React from 'react';

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-array-index-key */
import {
  memo,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react';
import SingleInput from './SingleInput';
import SingleOTPInput from './SingleInput';

// eslint-disable-next-line react/display-name
export const OTP = forwardRef((props, ref) => {
  const {
    length,
    isNumberInput,
    autoFocus,
    disabled,
    onChangeOTP,
    inputClassName,
    inputStyle,
    isSecure,
    hasErrored, // New prop to indicate whether there is an error
    errorStyle, // New prop for the error border style
    ...rest
  } = props;

  const [activeInput, setActiveInput] = useState(0);
  const [otpValues, setOTPValues] = useState(Array(length).fill(''));
  // Reset function
  const resetInputFields = () => {
    const newOTPValues = Array(length).fill('');
    setOTPValues(newOTPValues);
    setActiveInput(0);
  };
  useImperativeHandle(ref, () => ({
    resetInput: resetInputFields,
  }));
  // Helper to return OTP from inputs
  const handleOtpChange = useCallback(
    (otp) => {
      const otpValue = otp.join('');
      onChangeOTP(otpValue);
    },
    [onChangeOTP]
  );

  // Helper to return value with the right type: 'text' or 'number'
  const getRightValue = useCallback(
    (str) => {
      let changedValue = str;

      if (!isNumberInput || !changedValue) {
        return changedValue;
      }

      return Number(changedValue) >= 0 ? changedValue : '';
    },
    [isNumberInput]
  );

  // Change OTP value at focussing input
  const changeCodeAtFocus = useCallback(
    (str) => {
      const updatedOTPValues = [...otpValues];
      updatedOTPValues[activeInput] = str[0] || '';
      setOTPValues(updatedOTPValues);
      handleOtpChange(updatedOTPValues);
    },
    [activeInput, handleOtpChange, otpValues]
  );

  // Focus `inputIndex` input
  const focusInput = useCallback(
    (inputIndex) => {
      const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0);
      setActiveInput(selectedIndex);
    },
    [length]
  );

  const focusPrevInput = useCallback(() => {
    focusInput(activeInput - 1);
  }, [activeInput, focusInput]);

  const focusNextInput = useCallback(() => {
    focusInput(activeInput + 1);
  }, [activeInput, focusInput]);

  // Handle onFocus input
  const handleOnFocus = useCallback(
    (index) => () => {
      focusInput(index);
    },
    [focusInput]
  );

  // Handle onChange value for each input
  const handleOnChange = useCallback(
    (e) => {
      const val = getRightValue(e.currentTarget.value);
      if (!val || val === 'e') {
        e.preventDefault();
        return;
      }
      changeCodeAtFocus(val);
      focusNextInput();
    },
    [changeCodeAtFocus, focusNextInput, getRightValue]
  );

  // Handle onBlur input
  const onBlur = useCallback(() => {
    setActiveInput(-1);
  }, []);

  // Handle onKeyDown input
  const handleOnKeyDown = useCallback(
    (e) => {
      const pressedKey = e.key;

      switch (pressedKey) {
        case 'Backspace':
        case 'Delete': {
          e.preventDefault();
          if (otpValues[activeInput]) {
            changeCodeAtFocus('');
            focusPrevInput();
          } else {
            focusPrevInput();
          }
          break;
        }
        case 'ArrowLeft': {
          e.preventDefault();
          focusPrevInput();
          break;
        }
        case 'ArrowRight': {
          e.preventDefault();
          focusNextInput();
          break;
        }
        default: {
          if (
            pressedKey.match(/^[^a-zA-Z0-9]$/) ||
            (isNumberInput && pressedKey === 'e')
          ) {
            e.preventDefault();
          }
          break;
        }
      }
    },
    [
      activeInput,
      changeCodeAtFocus,
      focusNextInput,
      focusPrevInput,
      otpValues,
      isNumberInput,
    ]
  );

  const handleOnPaste = useCallback(
    (e) => {
      e.preventDefault();
      const pastedData = e.clipboardData
        .getData('text/plain')
        .trim()
        .slice(0, length - activeInput)
        .split('');
      if (pastedData) {
        let nextFocusIndex = 0;
        const updatedOTPValues = [...otpValues];
        updatedOTPValues.forEach((val, index) => {
          if (index >= activeInput) {
            const changedValue = getRightValue(pastedData.shift() || val);
            if (changedValue) {
              updatedOTPValues[index] = changedValue;
              nextFocusIndex = index;
            }
          }
        });

        // Update state with new OTP values
        setOTPValues(updatedOTPValues);

        // Combine OTP values to form pin
        const otpValue = updatedOTPValues.join('');

        // Log the pasted pin value
        console.log('Pasted PIN:', otpValue);

        // Update the code state in the parent component (where onChangeOTP is passed)
        props.onChangeOTP(otpValue);

        // Set the active input for focus
        setActiveInput(Math.min(nextFocusIndex + 1, length - 1));
      }
    },
    [activeInput, getRightValue, length, otpValues, props]
  );

  return (
    <div {...rest} style={{ direction: 'ltr' }}>
      {Array(length)
        .fill('')
        .map((_, index) => (
          <SingleOTPInput
            key={`SingleInput-${index}`}
            type={isSecure ? 'password' : isNumberInput ? 'number' : 'text'}
            focus={activeInput === index}
            value={otpValues && otpValues[index]}
            autoFocus={autoFocus}
            onFocus={handleOnFocus(index)}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
            onBlur={onBlur}
            onPaste={handleOnPaste}
            style={{
              ...inputStyle,
              ...(hasErrored && errorStyle), // Apply errorStyle when hasErrored is true
            }}
            autoComplete="one-time-code"
            className={inputClassName}
            disabled={disabled}
          />
        ))}
    </div>
  );
});
const OTPInput = memo(OTP);
export default OTPInput;
