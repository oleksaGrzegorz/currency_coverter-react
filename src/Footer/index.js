import "./style.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <p className="footer__text">
        <a
          className="footer__link"
          target="_blank"
          rel="noreferrer"
          href="https://icons8.com/icon/42279/money"
        >
          "Money" icon
        </a>

        <span> from </span>

        <a
          className="footer__link"
          target="_blank"
          rel="noreferrer"
          href="https://icons8.com"
        >
          Icons8.com
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
