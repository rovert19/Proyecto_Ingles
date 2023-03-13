import { Logo } from "./Logo";
import "./Header.css";
export const Header = ({ text }) => {
  return (
    <div>
      <header className="header-container">
        <h2>{text}</h2>
        <Logo />
      </header>
    </div>
  );
};
