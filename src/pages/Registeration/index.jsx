import './index.scss';
import logo from '../../assets/images/logo.png';
import Input from '../../components/ui/Input';
import RegisterationForm from './partials/RegisterationForm';
import Button from '../../components/ui/Button';
import earthIcon from '../../assets/icons/Earth.svg';
import mailIcon from '../../assets/icons/mail.svg';
export default function Registeration() {
  const formSteps = [
    {
      title: 'Your details',
      subTitle: 'Provide your basic information',
    },
    {
      title: 'Confirmation',
      subTitle: 'Confirm your email',
    },
    {
      title: 'Store information',
      subTitle: 'Set your store main info',
    },
  ];
  return (
    <div className="container">
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <div className="header-img">
        <img src="" alt="" />
      </div>
      <main className="main">
        <div class="progressbar">
          {/* <div class="progress" id="progress"></div> */}
          <div
            className="progress"
            style={{
              position: 'absolute',
              width: '50%',
              height: '2px',
              backgroundColor: '#7F56D9',
            }}
          ></div>
          <div class="progressbar__progress-step progressbar__progress-step--active">
            <div className="progressbar__progress-step--activeable-circle progressbar__progress-step--activeable-circle--active">
              <div className="progressbar__progress-step--activeable-circle__white-circle"></div>
            </div>
          </div>

          <div class="progressbar__progress-step" data-title="Id">
            <div className="progressbar__progress-step--activeable-circle progressbar__progress-step--activeable-circle">
              <div className="progressbar__progress-step--activeable-circle__white-circle"></div>
            </div>
          </div>
          <div class="progressbar__progress-step">
            <div className="progressbar__progress-step--activeable-circle progressbar__progress-step--activeable-circle">
              <div className="progressbar__progress-step--activeable-circle__white-circle"></div>
            </div>
          </div>
        </div>
        <div className="form-steps">
          <div className="form-steps__title">sdf</div>
          <div className="form-steps__title">sdf</div>
          <div className="form-steps__title">sdf</div>
        </div>
        <div className="RegisterationForm__container">
          <RegisterationForm />
        </div>
        <div className="main__haveAccount">
          <span className="main__haveAccount-para">
            Already have an account?
          </span>{' '}
          <Button className={'btn--secondary'}>Log in</Button>
        </div>
        <Button className="main__localisation-btn">
          {' '}
          <span className="main__localisation-btn_txt">عربي</span>
          <img src={earthIcon} alt="" />
        </Button>
      </main>
      <footer className="footer">
        <p className="footer__copyrights">© Markatty 2022</p>
        <p className="footer__mail">
          {' '}
          <img src={mailIcon} alt="" /> support@markatty.com
        </p>
      </footer>
    </div>
  );
}
