import './index.scss';

import star from '../../../../assets/icons/Star.svg';
import mail from '../../../../assets/icons/big bag.svg';
import bag from '../../../../assets/icons/bag.svg';
export default function HeroSection({ currentStep }) {
  function getStepImage(currentStep) {
    switch (currentStep) {
      case 0:
        return star;
      case 1:
      case 2:
        return mail;
      case 3:
        return bag;
      default:
        return 'defaultImage.jpg';
    }
  }
  function getStepHeader(currentStep) {
    switch (currentStep) {
      case 0:
        return 'Start turning your ideas into reality.';
      case 1:
      case 2:
        return 'Verify your account now';
      case 3:
        return 'Setup your store the way you like';
      default:
        return 'defaultImage.jpg';
    }
  }

  return (
    <section className="hero-section">
      <div className="hero-section__header">
        <span className="hero-section__header__icon">
          <img src={getStepImage(currentStep)} alt="star" />
        </span>
        <h1 className="hero-section__header__main-header">
          {getStepHeader(currentStep)}
        </h1>
        <p className="hero-section__header__description">
          Create a free account and get full access to all features for 30-days.
          No credit card needed. Get started in 2 minutes.
        </p>
      </div>
    </section>
  );
}
