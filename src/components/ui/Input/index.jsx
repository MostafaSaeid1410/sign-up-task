import './index.scss';

export default function Input({
  prefix,
  label,
  placeholder,
  className,
  ...rest
}) {
  return (
    <>
      <div className="input-container">
        <label htmlFor={label} className="label">
          {label}
        </label>
        <div className="input-prefix">{prefix}</div>
        <input
          id={label}
          className={`input input${prefix ? '--prefix' : ''} ${className}`}
          {...rest}
          placeholder={placeholder}
        ></input>
      </div>
    </>
  );
}
