import Logo from "../assets/logo.svg?react";
import IconPhone from "../assets/phone.svg?react";

export const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <Logo className="wrapper__logo" />
        <div className="wrapper__call">
          <p className="wrapper__call--text">¡Compra por este medio!</p>
          <a href="tel:(01) 411 6001" className="wrapper__call--number">
            <IconPhone />
            (01) 411 6001
          </a>
        </div>
      </div>
    </header>
  );
};
