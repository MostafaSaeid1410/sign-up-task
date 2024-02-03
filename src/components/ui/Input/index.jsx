import './index.scss';

export default function Input({
  prefix,
  suffix,
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
        {prefix && <div className="input-prefix">{prefix}</div>}
        <input
          id={label}
          className={`input input${prefix ? '--prefix' : ''} input${
            suffix ? '--suffix' : ''
          } ${className}`}
          {...rest}
          placeholder={placeholder}
        ></input>
        {suffix && <div className="input-suffix">{suffix}</div>}
      </div>
    </>
  );
}
