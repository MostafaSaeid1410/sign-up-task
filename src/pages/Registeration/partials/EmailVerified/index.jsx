import './index.scss';
import mailVerifiedIcon from '../../../../assets/icons/verifiedMail.svg';
import Button from '../../../../components/ui/Button';

export default function EmailVerified({ onSecondStepClick }) {
  return (
    <div className="email-verified">
      <div className="email-verified__icon">
        <img src={mailVerifiedIcon} alt="mail verified" />
      </div>
      <h2 className="email-verified__header">Email verified</h2>
      <p className="email-verified__para">
        Your accounnt has been verified successfully.
        <br /> Click below to setup your store.
      </p>
      <div className="check-mail__btn-container">
        <Button
          className="btn btn--primary "
          onClick={(e) => {
            e.preventDefault();
            onSecondStepClick((prev) => prev + 1);
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
