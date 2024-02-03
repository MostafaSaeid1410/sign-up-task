/* eslint-disable react/jsx-props-no-spreading */
import { memo, useRef, useLayoutEffect } from 'react';
import usePrevious from './usePrevious';

export function SingleOTPInputComponent(props) {
  const { focus, autoFocus, ...rest } = props;
  const inputRef = useRef(null);
  const prevFocus = usePrevious(!!focus);
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return (
    <input
      autoComplete="one-time-code"
      ref={inputRef}
      {...rest}
      pattern="[0-9]*"
      inputMode="numeric"
    />
  );
}

const SingleOTPInput = memo(SingleOTPInputComponent);
export default SingleOTPInput;
