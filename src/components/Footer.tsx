import Logo from "../assets/LogoFooter.svg?react";
import LogoFooterMobile from "../assets/LogoFooterMobile.svg?react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <Logo className="wrapper__logo--desktop" />
        <LogoFooterMobile className="wrapper__logo--mobile" />
        <div className="wrapper__separator" />
        <p className="wrapper__copyright">© 2023 RIMAC Seguros y Reaseguros.</p>
      </div>
    </footer>
  );
};
