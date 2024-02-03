import './index.scss';
import mailIcon from '../../../../assets/icons/mail.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyrights">© Markatty 2022</p>
      <p className="footer__mail">
        {' '}
        <img src={mailIcon} alt="" /> support@markatty.com
      </p>
    </footer>
  );
}
