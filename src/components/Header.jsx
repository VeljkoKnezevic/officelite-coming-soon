import Logo from "../../assets/shared/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="header__image" src={Logo} alt="Officelite logo" />
    </header>
  );
}
