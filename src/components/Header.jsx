import { Link } from "react-router-dom";
import Logo from "../../assets/shared/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__image" src={Logo} alt="Officelite logo" />
      </Link>
    </header>
  );
}
