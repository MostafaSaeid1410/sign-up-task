import { Select } from 'antd';
import Button from '../../../../components/ui/Button';
import Input from '../../../../components/ui/Input';
import './index.scss';
import englandFlag from '../../../../assets/icons/ic_language_en.svg';
import chevronDown from '../../../../assets/icons/chevron-down.svg';
export default function StoreInformationForm() {
  return (
    <form className="form form__store-information">
      <Input
        label="Store name"
        placeholder="Type your store name"
        type="text"
      />
      <Input
        label="Store URL*"
        placeholder="mystore"
        suffix={<div className="input-suffix__container">.markatty.com</div>}
      />
      <div className="select__container">
        <label htmlFor="" className="select__label">
          Store language
        </label>

        <Select
          defaultValue="lucy"
          className="antd-Select"
          // onChange={handleChange}
          suffixIcon={<img src={chevronDown} />}
          options={[
            {
              value: 'jack',
              label: 'Jack',
            },
            {
              value: 'lucy',
              label: (
                <div
                  style={{
                    display: 'flex',
                    gap: '.8rem',
                    alignItems: 'center',
                  }}
                >
                  {' '}
                  <img src={englandFlag} /> English
                </div>
              ),
            },
            {
              value: 'Yiminghe',
              label: 'yiminghe',
            },
            {
              value: 'disabled',
              label: 'Disabled',
              disabled: true,
            },
          ]}
        />
      </div>
      <div className="select__container">
        <label htmlFor="Fashion" className="select__label">
          Store Industry
        </label>
        <Select
          id="Fashion"
          defaultValue="Fashion"
          className="antd-Select"
          // onChange={handleChange}
          suffixIcon={<img src={chevronDown} />}
          options={[
            {
              value: 'Fashion',
              label: 'Fashion',
            },
          ]}
        />
        <p className="select__fashion-para">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Ex. (Baby, Boys' fashion, Girls' fashion, Men's fashion, etc..)
        </p>
      </div>
      {/* <PhoneInputCountryCode /> */}
      <Button className="btn--primary ">Save</Button>
    </form>
  );
}
