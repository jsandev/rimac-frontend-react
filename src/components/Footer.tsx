import Logo from "../assets/LogoFooter.svg?react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <Logo />
        <p className="wrapper__copyright">© 2023 RIMAC Seguros y Reaseguros.</p>
      </div>
    </footer>
  );
};
