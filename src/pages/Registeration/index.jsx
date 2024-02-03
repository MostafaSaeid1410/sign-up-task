import './index.scss';
import logo from '../../assets/images/logo.png';
import RegisterationForm from './partials/RegisterationForm';
import Button from '../../components/ui/Button';
import earthIcon from '../../assets/icons/Earth.svg';
import HeroSection from './partials/HeroSection';
import Footer from './partials/Footer';
import arrow from '../../assets/icons/arrow-Vector.svg';
import CheckMail from './partials/CheckMail';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import EmailVerified from './partials/EmailVerified';
import StoreInformationForm from './partials/StoreInformationForm';
import { useState } from 'react';
import greenConfirmed from '../../assets/icons/greenConfirmed.svg';
export default function Registeration() {
  const [currentStep, setCurrentStep] = useState(0);
  const currentStepHandler = (currentStep) => {
    setCurrentStep(currentStep);
  };
  const [toggle, settoggle] = useState(false);
  console.log('🚀 ~ currentStepHandler ~ currentStep:', currentStep);
  const progressBarWidth = () => {
    switch (currentStep) {
      case 0:
        return '0%';
      case 1:
      case 2:
        return '50%';
      case 3:
        return '95%';
      default:
        return '0%';
    }
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <div className="arrow">
        <img src={arrow} alt="" />
      </div>
      <HeroSection currentStep={currentStep} />
      <main className="main">
        <div class="progressbar">
          <div
            className="progress"
            style={{
              position: 'absolute',
              width: `${progressBarWidth(currentStep)}`,
              height: '2px',
              backgroundColor: '#7F56D9',
              left: '1.3rem',
            }}
          ></div>

          <div
            className={`progressbar__progress-step ${
              currentStep === 0 ? 'progressbar__progress-step--active' : ''
            }`}
          >
            {currentStep > 0 ? (
              <img src={greenConfirmed} className="confirmed-icon" />
            ) : (
              <div
                className={`progressbar__progress-step--activeable-circle progressbar__progress-step--activeable-circle${
                  currentStep === 0 ? '--active' : ''
                }`}
              >
                <div className="progressbar__progress-step--activeable-circle__white-circle"></div>
              </div>
            )}
            <div className="progressbar__progress-step__description">
              {' '}
              <p
                className={`progressbar__progress-step__description--main progressbar__progress-step__description--main${
                  currentStep === 0 ? '--active' : ''
                } ${
                  currentStep > 0
                    ? 'progressbar__progress-step__description--main--confirmed'
                    : ''
                } `}
              >
                Your details
              </p>
              <p className="progressbar__progress-step__description--sub">
                Provide your basic information
              </p>
            </div>
          </div>

          <div
            className={`progressbar__progress-step ${
              currentStep > 0 && currentStep < 3
                ? 'progressbar__progress-step--active'
                : ''
            }`}
            data-title="Id"
          >
            {currentStep > 2 ? (
              <img src={greenConfirmed} className="confirmed-icon" />
            ) : (
              <div
                className={`progressbar__progress-step--activeable-circle progressbar__progress-step--activeable-circle${
                  currentStep > 0 && currentStep < 3 ? '--active' : ''
                }`}
              >
                <div className="progressbar__progress-step--activeable-circle__white-circle"></div>
              </div>
            )}
            <div className="progressbar__progress-step__description">
              {' '}
              <p
                className={`progressbar__progress-step__description--main progressbar__progress-step__description--main${
                  currentStep > 0 && currentStep < 3 ? '--active' : ''
                } ${
                  currentStep > 2
                    ? 'progressbar__progress-step__description--main--confirmed'
                    : ''
                } `}
              >
                Confirmation
              </p>
              <p className="progressbar__progress-step__description--sub">
                Confirm your email
              </p>
            </div>
          </div>

          <div
            className={`progressbar__progress-step ${
              currentStep === 3 ? 'progressbar__progress-step--active' : ''
            }`}
          >
            {currentStep > 3 ? (
              <img src={greenConfirmed} className="confirmed-icon" />
            ) : (
              <div
                className={`progressbar__progress-step--activeable-circle progressbar__progress-step--activeable-circle${
                  currentStep === 3 ? '--active' : ''
                }`}
              >
                <div className="progressbar__progress-step--activeable-circle__white-circle"></div>
              </div>
            )}
            <div className="progressbar__progress-step__description">
              {' '}
              <p
                className={`progressbar__progress-step__description--main progressbar__progress-step__description--main${
                  currentStep === 3 ? '--active' : ''
                } `}
              >
                Store information
              </p>
              <p className="progressbar__progress-step__description--sub">
                Set your store main info
              </p>
            </div>
          </div>
        </div>

        {currentStep === 0 && (
          <RegisterationForm onSecondStepClick={currentStepHandler} />
        )}
        {currentStep === 1 && (
          <CheckMail onSecondStepClick={currentStepHandler} />
        )}
        {currentStep === 2 && (
          <EmailVerified onSecondStepClick={currentStepHandler} />
        )}

        {currentStep === 3 && <StoreInformationForm />}

        {currentStep > 0 ? (
          <Button className="btn btn--ternary">
            <img src={arrowLeft} alt="" /> Back to log in
          </Button>
        ) : (
          ''
        )}
      </main>

      <Footer />
    </div>
  );
}
